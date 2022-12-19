import {
	ChevronDownIcon,
	PencilSquareIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRef, useState } from "react";

export function GroupItem({ data, index }) {
	const [form, setForm] = useState(data);
	const [expand, setExpand] = useState(false);
	const [toggle, setToggle] = useState(false);

	const ref: any = useRef(null);

	const handleToggle = () => {
		setToggle((prev) => {
			if (!prev) {
				ref.current.focus();
			} else {
				ref.current.blur();
			}
			return !prev;
		});
	};

	return (
		<>
			<div
				className={clsx("flex justify-between items-center px-4 py-2 h-10", {
					"bg-slate-500": index % 2 === 1,
					"bg-slate-200": index % 2 === 0,
				})}
			>
				<input
					className={clsx(
						"border border-b-gray-500 outline-none disabled:border-none px-2 h-8",
						{
							"bg-slate-500": index % 2 === 1,
							"bg-slate-200": index % 2 === 0,
						}
					)}
					type="text"
					value={data.title}
					disabled={!toggle}
					ref={ref}
				/>
				<div className="flex">
					<PencilSquareIcon onClick={handleToggle} className="h-6 w-6 m-2" />
					<XMarkIcon className="h-6 w-6 m-2" />
					<ChevronDownIcon
						onClick={() => setExpand((prev) => !prev)}
						className="h-6 w-6 m-2"
					/>
				</div>
			</div>
			<div
				className={clsx("px-4 py-2 border border-t-gray-400", {
					"bg-slate-500": index % 2 === 1,
					"bg-slate-200": index % 2 === 0,
					hidden: !expand,
				})}
			>
				{data.students.map((el) => (
					<div>{el.fullname}</div>
				))}
			</div>
		</>
	);
}
