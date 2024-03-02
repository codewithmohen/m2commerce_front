export interface IAuthState {
	loading: boolean;
	data: ISuccessData | null;
	error: IError | null | any;
	status: number | null;
}

export interface ISuccessData {
	jwt: string;
	user: {
		id: number;
		username: string;
		email: string;
		provider: string;
		confirmed: boolean;
		blocked: boolean;
		createdAt: Date;
		updatedAt: Date;
	};
}
export interface IError {
	status: string | null;
	name: string;
	message: string;
	details: any | null;
	stack: string | null;
}
export interface IChangePassword {
	password: string;
	currentPassword: string;
	passwordConfirmation: string;
}
export interface ISignIn {
	identifier: string;
	password: string;
}
