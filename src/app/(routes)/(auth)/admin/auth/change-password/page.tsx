'use client';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { changePassword } from '@/app/(routes)/(auth)/_action/ChangePassword';
import TextField from '@mui/material/TextField';
import { redirect } from 'next/navigation';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import Loading from '../../../../../_components/loading';
import { useIsMount } from '../../../../../_hooks/useIsMount';

export default function index() {
    const isMount = useIsMount();
    const [loadPage, setLoadPage] = useState(true);
    const auth = useSelector((state: any) => state.auth) as any;
    const dispatch = useDispatch<any>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password = data.get('password') as string;
        const currentPassword = data.get('currentPassword') as string;
        const passwordConfirmation = data.get('passwordConfirmation') as string;
        console.log(password, currentPassword, passwordConfirmation);
        // let originalPromiseResult = await dispatch(changePassword({ password: password, currentPassword: currentPassword, passwordConfirmation: passwordConfirmation })).unwrap();
        // console.log(originalPromiseResult);
        try {
            // const originalPromiseResult = await dispatch(changePassword({ password: password, currentPassword: currentPassword, passwordConfirmation: passwordConfirmation })).unwrap();
            // console.log(originalPromiseResult);
            // if (originalPromiseResult)
            //     redirect('/admin');
            await dispatch(changePassword({ password: password, currentPassword: currentPassword, passwordConfirmation: passwordConfirmation })).unwrap();
            redirect('/admin');
        } catch (rejectedValueOrSerializedError) {
            console.log(rejectedValueOrSerializedError);

        }

        // redirect('/admin');
    };
    useEffect(() => {
        isMount && auth.error && enqueueSnackbar(auth.error, { variant: 'error' });
    }, [auth.error]);
    useEffect(() => {
        isMount && auth.data?.jwt && enqueueSnackbar('Password Changed!', { variant: 'success' });
    }, [auth.data?.jwt]);

    useEffect(() => {
        setLoadPage(false);
    }, []);

    return (
        <>
            {loadPage && (<Loading />)}
            {!loadPage &&
                (
                    <>
                        <SnackbarProvider />
                        <Grid item xs={4}>
                            <Typography variant="h2">Change Password</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="currentPassword"
                                    label="Current Password"
                                    name="currentPassword"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="passwordConfirmation"
                                    label="Password Confirmation"
                                    name="passwordConfirmation"
                                />
                                <Button
                                    color='primary'
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Change
                                </Button>
                            </Box>
                        </Grid >
                    </>
                )
            }
        </>
    );
}
