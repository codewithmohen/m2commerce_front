import { createAsyncThunk } from '@reduxjs/toolkit';
import IChangePassword from '../_interface/IChangePassword';
import { RootStateType, store } from '@/app/store';
import axios from 'axios';
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
			console.log(JSON.stringify(response));
			return JSON.stringify(response);
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
