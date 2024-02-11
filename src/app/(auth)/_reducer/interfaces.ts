export interface IAuthState {
	loading: boolean;
	data: ISuccessData | null;
	error: IError | null;
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
	status: number;
	name: string;
	message: string;
	details: any;
}
