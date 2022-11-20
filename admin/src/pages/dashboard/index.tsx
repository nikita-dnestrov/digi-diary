import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { createSchoolApiCall, getProfileApiCall, updateProfileApiCall } from "../../api";
import { Button, Input } from "../../components";
import { Pad } from "../../components/common/Pad";
import { SchoolDashboard } from "../../components/profile/SchoolDashboard";

export default function ProfilePage() {
	const [user, setUser] = useState<any>({ fullname: "", phone: "", school: [] });
	const [editToggle, setEditToggle] = useState(false);

	const queryClient = useQueryClient();

	const userQuery = useQuery({
		queryKey: ["user-data"],
		queryFn: getProfileApiCall,
		onSuccess: (data) => setUser(data),
	});

	const userMutation = useMutation({
		mutationFn: updateProfileApiCall,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
	});

	const schoolCreateMutation = useMutation({
		mutationFn: createSchoolApiCall,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
	});

	// useEffect(() => {
	// 	const token = localStorage.getItem("token");
	// 	token
	// 		? (async () => {
	// 				const user = await getProfileApiCall(token);
	// 				setUser(user);
	// 		  })()
	// 		: "";
	// }, []);

	useEffect(() => {
		console.log(user);
	}, [user]);

	const inputStateProps = (name: string, state: any, setState: any) => ({
		name,
		value: state[name],
		onChange: (e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value })),
	});

	const handleEditToggle = () => setEditToggle((prev) => !prev);

	return (
		<div>
			{userQuery.data ? (
				<div className="flex flex-col w-full">
					<div className="flex justify-between w-full">
						<SchoolDashboard data={user.school} onCreate={schoolCreateMutation.mutate} />
						<div>
							<div className="flex justify-between">
								<div>Personal Data</div>
								<div onClick={handleEditToggle}>edit</div>
							</div>
							<Input
								{...inputStateProps("fullname", user, setUser)}
								title="name"
								disabled={!editToggle}
								color="border-gray-500"
							/>
							<Pad height="10px" />
							<Input
								{...inputStateProps("phone", user, setUser)}
								title="phone"
								disabled={!editToggle}
								color="border-gray-500"
							/>
							<Button onClick={() => userMutation.mutate(user)} color="bg-red-500" title="Edit" />
						</div>
					</div>
				</div>
			) : (
				<div>govno</div>
			)}
		</div>
	);
}
