import { Dialog } from "@headlessui/react";
import { useState } from "react";

export function Modal({ open, onClose, children }) {
	return (
		<Dialog className="relative z-50" open={open} onClose={onClose}>
			<div className="fixed inset-0 bg-black/20" aria-hidden="true" />
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">{children}</Dialog.Panel>
			</div>
		</Dialog>
	);
}
