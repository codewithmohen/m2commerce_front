import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ISignIn from '../_interface/ISignIn';
const baseAPIAddress = 'http://localhost:1337/api/';
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
