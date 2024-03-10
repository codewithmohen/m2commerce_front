import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IAuthState from './_interface/IAuthState';
import { signIn } from './_action/signIn';
import { changePassword } from './_action/ChangePassword';
import { useRouter } from 'next/router';
export const initialState: IAuthState = {
	loading: false,
	data: null,
	error: null,
	status: null,
};

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
			state.loading = true;
			state.data = null;
			state.error = null;
		});
		builder.addCase(signIn.fulfilled, (state: IAuthState, action: any) => {
			state.loading = false;
			state.data = action.payload.data;
			state.error = null;
		});
		builder.addCase(signIn.rejected, (state: IAuthState, action: any) => {
			state.loading = false;
			state.data = null;
			state.error = action.error.message;
		});
		builder.addCase(changePassword.pending, (state: IAuthState, action: PayloadAction<any>) => {
			console.log('changePassword.pending', state.data);
			state.loading = true;
			state.error = null;
		});
		builder.addCase(changePassword.fulfilled, (state: IAuthState, action: any) => {
			console.log('changePassword.fulfilled', state.data);
			state.loading = false;
			state.data = action.payload.data;
			state.error = null;
			// useRouter.push();
			// Response.redirect('/');
		});
		builder.addCase(changePassword.rejected, (state: IAuthState, action: any) => {
			console.log('changePassword.rejected', state.data);
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
