import { useState } from "react";
import { inputStateProps } from "../../helper/inputStateProps";
import { Button, Input } from "../common";
import { Modal } from "../common/Modal";
import { Pad } from "../common/Pad";

export function SchoolDashboard({ data, onCreate }) {
	const [form, setForm] = useState({ title: "" });
	let [modal, setModal] = useState(false);

	const handleModalButton = () => {
		setModal(false);
		onCreate(form);
	};

	return (
		<>
			<div className="w-2/3 border rounded border-green-500">
				<div>{data ? data[0].title : ""}</div>
			</div>

			<Modal open={modal} onClose={() => setModal(false)}>
				<div className="flex flex-col">
					<div>Create school</div>
					<Pad height="10px" />
					<Input {...inputStateProps("title", form.title, setForm)} />
					<Pad height="10px" />
					<div className="flex justify-between">
						<Button onClick={() => setModal(false)} title="Cancel" />
						<Pad width="10px" />
						<Button onClick={handleModalButton} title="Create" />
					</div>
				</div>
			</Modal>
		</>
	);
}
