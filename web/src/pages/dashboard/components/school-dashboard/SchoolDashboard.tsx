import { useEffect, useState } from "react";
import { inputStateProps } from "../../../../utils/inputStateProps";
import { Button, Input } from "../../../../components/common";
import { Modal } from "../../../../components/common/Modal";
import { Pad } from "../../../../components/common/Pad";
import { useQuery } from "@tanstack/react-query";
import { getOwnSchoolApiCall } from "../../../../api/school";
import { useOnMountCall } from "../../../../hooks/useOnMountCall";
import { SchoolDashboardItem } from "./SchoolDasboardItem";
import { useModal } from "../../../../hooks";
import { GroupsListModal } from "./GroupsListModal";
import { useLocation } from "wouter";

export function SchoolDashboard({ onCreate }) {
	const [form, setForm] = useState({ title: "" });
	// const [modal, setModal] = useState(false);
	const { modal, toggleModal, closeModal, openModal } = useModal({
		createSchool: { open: false },
		groups: { open: false },
		students: { open: false },
		classes: { open: false },
	});

	const handleModalButton = () => {
		closeModal("createSchool");
		onCreate(form);
	};

	const { data, isLoading } = useQuery({
		queryKey: ["school-data"],
		queryFn: getOwnSchoolApiCall,
	});

	const [loc, setLoc] = useLocation();

	return (
		<>
			{isLoading ? (
				<div>loading</div>
			) : (
				<div className="w-2/3">
					<div>{data!.title}</div>
					<div className="flex flex-wrap">
						<SchoolDashboardItem
							title="Students"
							count={data!.students.length}
						/>
						<SchoolDashboardItem title="Classes" count={data!.classes.length} />
						<SchoolDashboardItem
							onClick={() => setLoc(`/groups/${data.id}`)}
							title="Groups"
							count={data!.groups.length}
						/>
					</div>
				</div>
			)}

			<GroupsListModal
				open={modal.groups.open}
				onClose={() => closeModal("groups")}
				data={data?.groups ? data.groups : []}
			/>
			<Modal
				open={modal.createSchool.open}
				onClose={() => closeModal("createSchool")}
			>
				<div className="flex flex-col">
					<div>Create school</div>
					<Pad height="10px" />
					<Input {...inputStateProps("title", form.title, setForm)} />
					<Pad height="10px" />
					<div className="flex justify-between">
						<Button onClick={() => closeModal("createSchool")} title="Cancel" />
						<Pad width="10px" />
						<Button onClick={handleModalButton} title="Create" />
					</div>
				</div>
			</Modal>
		</>
	);
}
