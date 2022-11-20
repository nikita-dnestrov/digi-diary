import classNames from "classnames";
import { FC, HTMLAttributes, HTMLProps } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
	title: string;
	color?: string;
}

export const Button: FC<Props> = ({ title, color = "primary", ...baseProps }) => {
	return (
		<button className="bg-green-500 rounded h-8 text-white w-full" {...baseProps}>
			{title}
		</button>
	);
};
