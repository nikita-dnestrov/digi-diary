import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Input, Modal } from "../../../../components";
import { getGroupById, getSchoolGroups } from "../../api/groups";

export function GroupEditModal({ open, onClose, initId }) {
	const { data, refetch, isLoading } = useQuery({
		queryFn: () => getGroupById(initId),
		queryKey: ["group-data"],
		enabled: false,
	});
	useEffect(() => {
		initId ? refetch() : "";
	}, [initId]);

	console.log(data);

	return (
		<Modal {...{ open, onClose }}>
			<Input value={data.title} />
			{data.students.map((el) => {
				return <div>kek</div>;
			})}
		</Modal>
	);
}
