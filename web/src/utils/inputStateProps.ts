export const inputStateProps = (name: string, state: any, setState: any) => ({
	name,
	value: state[name],
	onChange: (e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value })),
});
