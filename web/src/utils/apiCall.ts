import axios from 'axios';

const baseUrl = 'http://localhost:9000/api';

export const apiCall = async (url: string, method: string, data?: any) => {
	const token = localStorage.getItem('token');
	const callResult = await axios({
		url: `${baseUrl}${url}`,
		method,
		data,
		headers: { Authorization: `Bearer ${token}` },
	});

	console.log(
		'Calling ',
		callResult.config.url,
		' with code ',
		callResult.status
	);

	return callResult;
};
