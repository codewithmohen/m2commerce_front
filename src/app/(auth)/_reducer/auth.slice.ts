import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthState, IChangePassword, ISignIn } from './interfaces';
import { RootStateType, store } from './../../store';

export const initialState: IAuthState = {
	loading: false,
	data: null,
	error: null,
	status: null,
};

const baseAPIAddress = 'http://localhost:1337/api/';

export const changePassword = createAsyncThunk(
	'auth/change-password',
	async ({ password, currentPassword, passwordConfirmation }: IChangePassword) => {
		try {
			const state: RootStateType = store.getState();
			const jwt = state.auth.data?.jwt;
			const response = await axios.post(
				baseAPIAddress + 'auth/change-password',
				JSON.stringify({
					password: password,
					currentPassword: currentPassword,
					passwordConfirmation: passwordConfirmation,
				}),
				{
					headers: {
						Authorization: `Bearer ${jwt}`,
						'Content-Type': 'application/json',
					},
				}
			);
			console.log(response);
			return response;
		} catch (error: any) {
			console.log(error.response);
			const e =
				'Error ' +
				error.response.status +
				' (' +
				error.response.data.error.name +
				'): ' +
				error.response.data.error.message;
			error.message = e;
			throw error;
		}
	}
);

export const signIn = createAsyncThunk('auth/sign-in', async ({ identifier, password }: ISignIn) => {
	try {
		const response = await axios.post(
			baseAPIAddress + 'auth/local',
			JSON.stringify({
				identifier: identifier,
				password: password,
			}),
			{ headers: { 'Content-Type': 'application/json' } }
		);
		console.log(response);
		return response;
	} catch (error: any) {
		console.log(error.response);
		const e =
			'Error ' +
			error.response.status +
			' (' +
			error.response.data.error.name +
			'): ' +
			error.response.data.error.message;
		error.message = e;
		throw error;
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signOut: (state) => {
			console.log('signOut');
			state.loading = false;
			state.data = null;
			state.error = null;
			state.status = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state: IAuthState, action: PayloadAction<any>) => {
			// done
			state.loading = true;
			state.data = null;
			state.error = null;
		});
		builder.addCase(signIn.fulfilled, (state: IAuthState, action: any) => {
			// done
			state.loading = false;
			state.data = action.payload.data;
			state.error = null;
		});
		builder.addCase(signIn.rejected, (state: IAuthState, action: any) => {
			//done
			state.loading = false;
			state.data = null;
			state.error = action.error.message;
		});
		builder.addCase(changePassword.pending, (state: IAuthState, action: PayloadAction<any>) => {
			//done
			console.log('changePassword.pending', state.data);
			state.loading = true;
			// state.data = null;
			state.error = null;
		});
		builder.addCase(changePassword.fulfilled, (state: IAuthState, action: any) => {
			console.log('changePassword.fulfilled', state.data);
			state.loading = false;
			state.data = action.payload.data;
			state.error = null;
			Response.redirect(new URL(`/yourCustomPath/`));
		});
		builder.addCase(changePassword.rejected, (state: IAuthState, action: any) => {
			//done
			console.log('changePassword.rejected', state.data);
			state.loading = false;
			// state.data = null;
			state.error = action.error.message;
		});
	},
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
