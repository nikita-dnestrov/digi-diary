import { Modal } from "../../../../components";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { PencilIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { GroupItem } from "./GroupItem";
import { useModal } from "../../../../hooks";

export function GroupsListModal({ open, onClose, data }) {
	const { modal, openModal, closeModal } = useModal({
		createGroup: { open: false },
	});

	return (
		<Modal width="2xl" open={open} onClose={onClose}>
			<div>Groups</div>
			<div className="">
				{data.map((el, i) => {
					return <GroupItem data={el} index={i} />;
				})}
			</div>
			<div className="h-10 border border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white">
				Add
			</div>
			<Modal open={modal.createGroup} onClose={() => closeModal("createGroup")}>
				<div>
					<input type="text" />
				</div>
			</Modal>
		</Modal>
	);
}
