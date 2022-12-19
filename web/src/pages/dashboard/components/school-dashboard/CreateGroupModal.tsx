import { useState } from "react";
import { Modal } from "../../../../components";

export function GroupDetailsModal({ open, onClose, initId }) {
	const [form, setForm] = useState({ title: "" });
	const [students, setStudents] = useState([]);
	return (
		<Modal open={open} onClose={onClose}>
			<div></div>
		</Modal>
	);
}
