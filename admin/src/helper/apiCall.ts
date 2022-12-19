import axios from 'axios';

const baseUrl = 'http://localhost:9000/api';

export const apiCall = async (url: string, method: string, data?: any) => {
	const token = localStorage.getItem('token');
	return await axios({
		url: `${baseUrl}${url}`,
		method,
		data,
		headers: { Authorization: `Debug ${token}` },
	});
};
