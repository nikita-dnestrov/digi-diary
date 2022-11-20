import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
import axios from "axios";

export default function Home() {
	const [form, setForm] = useState({ phone: "", password: "" });

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const signin = useCallback(async () => {
		const res = await axios.post(`http://localhost:9000/api/auth/signin`, { ...form });
		console.log(res);
	}, [form]);

	return <div></div>;
}
