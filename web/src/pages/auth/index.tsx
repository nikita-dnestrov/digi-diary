import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common';
import { signinApiCall } from '../../api';
import { useLocation, useRouter } from 'wouter';

export default function AuthPage() {
	const [form, setForm] = useState({ phone: '380666330129', password: 'qwer' });

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			// Router.push('/profile');
		}
	}, []);

	const [loc, setLoc] = useLocation();

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const signin = useCallback(async () => {
		const { token } = await signinApiCall(form);
		localStorage.setItem('token', token);
		setLoc('/dashboard');
	}, [form]);

	return (
		<div>
			<div className='flex h-screen w-screen items-center justify-center'>
				<div className='flex flex-col'>
					<Input
						value={form.phone}
						onChange={inputHandler}
						name='phone'
						placeholder='Phone'
					/>
					<div className='h-2' />
					<Input
						value={form.password}
						onChange={inputHandler}
						name='password'
						placeholder='Password'
					/>
					<div className='h-2' />
					<Button title='Sign-In' onClick={signin} />
				</div>
			</div>
		</div>
	);
}
