import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthState } from './interfaces';

export const initialState: IAuthState = {
	loading: false,
	data: null,
	error: null,
};

export const signIn = createAsyncThunk(
	'auth/sign-in',
	async ({ username, password }: { username: string; password: string }) => {
		try {
			const response = await axios.post('http://localhost:1337/api/auth/local', {
				identifier: username,
				password: password,
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);
export const signOut = (state: IAuthState) => {
	state.data = null;
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signOut,
	},
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state: IAuthState, action: PayloadAction<any>) => {
			state.loading = true;
		});
		builder.addCase(signIn.fulfilled, (state: IAuthState, action: any) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		});
		builder.addCase(signIn.rejected, (state: IAuthState, action: any) => {
			state.loading = false;
			state.data = null;
			state.error = action.error;
		});
	},
});

export default authSlice.reducer;
