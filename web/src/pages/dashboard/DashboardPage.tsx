import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { FC, useEffect, useState } from "react";
import {
	createSchoolApiCall,
	getProfileApiCall,
	updateProfileApiCall,
} from "../../api";
import { Button, Input } from "../../components";
import { Pad } from "../../components/common/Pad";
import { useOnMountCall } from "../../hooks/useOnMountCall";
import { SchoolDashboard } from "./components/school-dashboard/SchoolDashboard";

export function DashboardPage() {
	const queryClient = useQueryClient();
	const [user, setUser] = useState<any>(null);
	const [editToggle, setEditToggle] = useState(false);

	// const userData = useOnMountCall(getProfileApiCall);
	// useEffect(() => {
	// 	setUser(userData.data);
	// }, [userData]);

	const userQuery = useQuery({
		queryKey: ["user-data"],
		queryFn: getProfileApiCall,
		onSuccess: (data) => {
			console.log(data);
			setUser(data);
		},
	});

	const userMutation = useMutation({
		mutationFn: updateProfileApiCall,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
	});

	const schoolCreateMutation = useMutation({
		mutationFn: createSchoolApiCall,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
	});

	const inputStateProps = (name: string, state: any, setState: any) => ({
		name,
		value: state[name],
		onChange: (e) =>
			setState((prev) => ({ ...prev, [e.target.name]: e.target.value })),
	});

	const handleEditToggle = () => setEditToggle((prev) => !prev);

	const onEdit = () => {
		const { fullname, phone } = user;
		userMutation.mutate({ fullname, phone });
	};

	return (
		<div>
			{user ? (
				<div className="flex flex-col w-full">
					<div className="flex justify-between w-full">
						<SchoolDashboard onCreate={() => ""} />
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
							<Button onClick={onEdit} color="bg-red-500" title="Edit" />
						</div>
					</div>
				</div>
			) : (
				<div>govno</div>
			)}
		</div>
	);
}
