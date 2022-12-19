import cn from "classnames";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useLocation } from "wouter";

export function Sidebar({}) {
	const [collapse, setCollapse] = useState(false);
	const [selected, setSelected] = useState("");
	const sidebarClasses = cn(
		"h-screen box-border pt-8 pb-4 bg-slate-100 flex items-end flex-col border-2 border-r-slate-300",
		[{ ["w-80"]: !collapse, ["w-20"]: collapse }]
	);

	const sidebarItemClasses = (name: string) =>
		cn(
			"min-w-50 max-w-50 box-border text-green-500 text-2xl  hover:border-r-green-500 hover:border-r-2 pl-5 pr-20 py-2 rounded-tl-2xl rounded-bl-2xl cursor-pointer select-none",
			{ ["border-r-green-500 border-r-2"]: selected === name }
		);

	const [loc, setLoc] = useLocation();

	const handleLink = (name) => {
		setSelected(name);
		setLoc(`/${name}`);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		setLoc("/auth");
	};

	useEffect(() => {
		setSelected(loc.split("/").join(""));
	}, []);

	return (
		<div className={sidebarClasses}>
			<div
				className={sidebarItemClasses("dashboard")}
				onClick={() => handleLink("dashboard")}
			>
				Dashboard
			</div>
			<div
				className={sidebarItemClasses("debug")}
				onClick={() => handleLink("debug")}
			>
				Debug
			</div>
			<div
				className={clsx(
					"min-w-50 max-w-50 box-border cursor-pointer py-2 pl-5 pr-20 text-2xl text-green-500"
				)}
				onClick={handleLogout}
			>
				Logout
			</div>
		</div>
	);
}
