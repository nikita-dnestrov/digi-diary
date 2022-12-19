import { apiCall } from '../utils/apiCall';

export const getOwnSchoolApiCall = async () => {
	const res = await apiCall(`/school`, 'get');
	return res.data;
};
