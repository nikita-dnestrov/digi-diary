import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface Props {
	children: ReactNode;
}

export function Layout({ children }: Props) {
	return (
		<div className="h-screen flex flex-row justify-start">
			<Sidebar />
			<div className="bg-white w-full p-16">{children}</div>
		</div>
	);
}
