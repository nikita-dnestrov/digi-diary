import { useEffect, useState } from "react";

type TInitState = { [key: string]: { open: boolean } };

export const useModal = (initState: TInitState) => {
	type TModalName = keyof typeof initState;
	const [modal, setModal] = useState(initState);

	const toggleModal = (name: TModalName) => {
		setModal((prev) => ({
			...prev,
			[name]: { ...prev[name], open: !prev[name].open },
		}));
	};

	const closeModal = (name: TModalName) => {
		setModal((prev) => ({
			...prev,
			[name]: { ...prev[name], open: false },
		}));
	};

	const openModal = (name: TModalName) => {
		setModal((prev) => ({
			...prev,
			[name]: { ...prev[name], open: true },
		}));
	};

	return { modal, toggleModal, closeModal, openModal };
};
