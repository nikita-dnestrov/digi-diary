import { Disclosure } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Modal } from "../../components";
import { ListDisclosure } from "../../components/common/ListDisclosure";
import { getSchoolGroups } from "./api/groups";
import { GroupItem } from "./components/school-dashboard/GroupItem";
import clsx from "clsx";
import { ChevronDownIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { GroupEditModal } from "./components/modals/GroupEditModal";

function Group({ data, index, onEdit }) {
	return (
		<Disclosure>
			<div
				className={clsx({
					"bg-slate-500": index % 2 === 1,
					"bg-slate-200": index % 2 === 0,
				})}
			>
				<div className="flex justify-between items-center h-10 mx-4">
					<div>{data.title}</div>
					<div className="flex">
						<PencilSquareIcon onClick={onEdit} className="h-6 w-6 m-2" />
						<Disclosure.Button className="py-2 flex justify-start items-start">
							<ChevronDownIcon className="w-6 h-6 mx-2" />
						</Disclosure.Button>
					</div>
				</div>
				<Disclosure.Panel className="">
					{data.students.map((el) => (
						<div key={el.id} className="flex items-center h-10 mx-4">
							{el.fullname}
						</div>
					))}
				</Disclosure.Panel>
			</div>
		</Disclosure>
	);
}

export function GroupsPage({ schoolId }) {
	const [groupsData, setGroupsData] = useState([]);
	const [modal, setModal] = useState<{ open: boolean; initId: null | number }>({
		open: false,
		initId: null,
	});

	const { data, isLoading } = useQuery({
		queryFn: () => getSchoolGroups(schoolId),
		queryKey: ["school-groups-data"],
		onSuccess: (data) => setGroupsData(data),
	});

	const onModalOpen = (id: number) => {
		setModal({ open: true, initId: id });
	};

	const onModalClose = () => {
		setModal({ open: false, initId: null });
	};

	return (
		<div>
			<div>Groups</div>
			<div className="">
				{groupsData.map((el: any, i) => {
					return (
						<Group
							key={el.id}
							data={el}
							index={i}
							onEdit={() => onModalOpen(el.id)}
						/>
					);
				})}
			</div>
			<div className="h-10 border border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white">
				Add
			</div>
			<GroupEditModal
				open={modal.open}
				onClose={onModalClose}
				initId={modal.initId}
			/>
		</div>
	);
}
