'use client';
import React, { useEffect } from 'react';
import { fetchUsers } from './user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/rootReducer';

interface User {
	id: number;
	name: string;
}

interface UserState {
	loading: boolean;
	users: User[];
	error: string;
}

// function UserView(props) {
const Module: React.FC = () => {
	const user = useSelector((state: RootState) => state.user) as UserState;
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div>
			<h2>user view</h2>
			{user.loading && <div>loading...</div>}
			{!user.loading && user.error ? <div>Error:{user.error}</div> : null}
			{!user.loading && user.users.length ? (
				<ul>
					{user.users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default Module;
