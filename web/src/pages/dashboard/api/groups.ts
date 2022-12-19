import { apiCall } from "../../../utils";

export const getSchoolGroups = async (id: number) => {
	const res = await apiCall(`/group/by-school/${id}`, "get");
	return res.data;
};

export const getGroupById = async (id: number) => {
	const res = await apiCall(`/group/${id}`, "get");
	return res.data;
};
