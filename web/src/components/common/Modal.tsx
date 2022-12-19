import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

export interface TModalProps {
	open: boolean;
	onClose: () => void;
	children: any;
	width?:
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl";
}

export function Modal({ open, onClose, children, width = "sm" }: TModalProps) {
	const widthParse = () => {
		switch (width) {
			case "sm":
				return "max-w-sm";
			case "md":
				return "max-w-md";
			case "lg":
				return "max-w-lg";
			case "xl":
				return "max-w-xl";
			case "2xl":
				return "max-w-2xl";
			case "3xl":
				return "max-w-3xl";
			case "4xl":
				return "max-w-4xl";
			case "5xl":
				return "max-w-5xl";
			case "6xl":
				return "max-w-6xl";
			case "7xl":
				return "max-w-7xl";
			default:
				return "max-w-xs";
		}
	};

	return (
		<Dialog
			className="relative z-50 max-w-screen"
			open={open}
			onClose={onClose}
		>
			<div className="fixed inset-0 bg-black/20" aria-hidden="true" />
			<div className="fixed inset-0 flex items-center justify-center p-4 w-screen">
				<Dialog.Panel
					className={clsx("w-full rounded bg-white p-6", widthParse())}
				>
					{children}
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
