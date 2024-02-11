import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function useSecure(setLoadPage: any) {
	const router = useRouter();
	useEffect(() => {
		const persisLocalStorage = localStorage.getItem('persist:root');
		const persisLocalStorageParsed = persisLocalStorage ? JSON.parse(persisLocalStorage) : '';
		const authParsed = JSON.parse(persisLocalStorageParsed.auth);
		const isAuthenticated = authParsed.data?.jwt ? true : false;
		if (!isAuthenticated) {
			router.push('/auth/sign-in');
		} else {
			setLoadPage(true);
		}
	}, []);
	return null;
}
