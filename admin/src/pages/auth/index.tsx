import { ChangeEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { CustomHead } from "../../components";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common";
import { signinApiCall } from "../../api";
import Router from "next/router";

export default function AuthPage() {
	const [form, setForm] = useState({ phone: "", password: "" });

	useEffect(() => {
		const token = localStorage.getItem("token");
		Router.push("/profile");
	}, []);

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const signin = useCallback(async () => {
		const { token } = await signinApiCall(form);
		localStorage.setItem("token", token);
	}, [form]);

	return (
		<div>
			<CustomHead />
			<div className="flex w-screen h-screen items-center justify-center">
				<div className="flex flex-col">
					<Input value={form.phone} onChange={inputHandler} name="phone" placeholder="Phone" />
					<div className="h-2" />
					<Input value={form.password} onChange={inputHandler} name="password" placeholder="Password" />
					<div className="h-2" />
					<Button title="Sign-In" type="danger" onClick={signin} />
				</div>
			</div>
		</div>
	);
}
