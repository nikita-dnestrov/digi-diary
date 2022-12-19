import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
	title: string;
	count: number;
}

export function SchoolDashboardItem({ title, count, ...baseProps }: Props) {
	return (
		<div
			{...baseProps}
			className="p-5 rounded-md drop-shadow-md bg-white flex flex-col items-center justify-center w-2/5 h-28 m-3"
		>
			<div>{count}</div>
			<div>{title}</div>
		</div>
	);
}
