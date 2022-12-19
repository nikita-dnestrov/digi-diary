import classNames from "classnames";

interface Props {
	width?: `${number}px`;
	height?: `${number}px`;
}

export function Pad({ width, height }: Props) {
	return <div style={{ width, height }} />;
}
