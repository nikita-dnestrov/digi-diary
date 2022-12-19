import axios from "axios";
import { apiCall } from "../helper/apiCall";
import { ISignInData, ISignInResponse } from "../types/auth";

export const signinApiCall = async (
  data: ISignInData
): Promise<ISignInResponse> => {
  const res = await axios.post(
    `http://localhost:9000/api/manager/signin`,
    data
  );
  return res.data;
};

export const getProfileApiCall = async (): Promise<ISignInResponse> => {
  const res = await apiCall(`/manager/profile`, "get");
  return res.data.manager;
};

export const updateProfileApiCall = async (data: any) => {
  await apiCall(`/manager/profile`, "put", data);
};

export const createSchoolApiCall = async (data: any) => {
  await apiCall("/school", "post", data);
};
