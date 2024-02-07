import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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
export interface IAuthState {
	loading: boolean;
	data: ISuccessData | null;
	error: IError | null;
}

export const initialState: IAuthState = {
	loading: false,
	data: null,
	error: null,
};

export const signIn = createAsyncThunk('auth/sign-in', async () => {
	try {
		const response = await axios.post('http://localhost:1337/api/auth/local', {
			identifier: 'codewithmohsen@gmail.com',
			password: 'Bahar1391',
		});
		return response.data;
	} catch (error) {
		throw error;
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state: IAuthState, action: PayloadAction<any>) => {
			state.loading = true;
		});
		builder.addCase(signIn.fulfilled, (state: IAuthState, action: any) => {
			state.loading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(signIn.rejected, (state: IAuthState, action: any) => {
			state.loading = false;
			state.data = null;
			state.error = action.error;
		});
	},
});

export default authSlice.reducer;
