import classNames from "classnames";
import { ComponentProps, FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
	color?: `border-${string}-${number}`;
	title?: string;
	withTitle?: boolean;
}

export const Input: FC<Props> = ({ color, title, withTitle = false, ...baseProps }) => {
	const inputClasses = classNames(
		"h-8 px-3 text-sm border rounded placeholder:capitalize disabled:bg-gray-300 border-green-500 focus:outline-none ",
		{ [color as string]: color, ["border-green-500"]: !color }
	);
	return (
		<>
			{withTitle ? <div className="capitalize pl-2">{title}</div> : ""}

			<input {...baseProps} placeholder={title ? title : baseProps.name} className={inputClasses} />
		</>
	);
};
