export interface ISignInData {
	phone: string;
	password: string;
}

export interface ISignInResponse {
	user: any;
	token: string;
}
