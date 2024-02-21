'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../_reducer/auth.slice';
import { IAuthState } from '../../_reducer/interfaces';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function index() {
    const [loadPage, setLoadPage] = useState(true);
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    const dispatch = useDispatch<any>();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        dispatch(signIn({ identifier: email, password: password }));
    };
    useEffect(() => {
        auth.error && enqueueSnackbar(auth.error, { variant: 'error' });
    }, [auth.error]);
    useEffect(() => {
        auth.data?.jwt && enqueueSnackbar('Welcome', { variant: 'success' });
    }, [auth.data?.jwt]);
    return (
        loadPage && <>
            <SnackbarProvider />
            <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={"codewithmohsen@gmail.com"}
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="password"
                // value="Bahar1391"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    color='primary'
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="./forget-password" color="inherit">
                            Forgot password?
                        </Link>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs>
                        {'Copyright © '}
                        <Link color="inherit" href="https://github.com/codewithmohsen/m2commerce_front" >
                            M2Commerce
                        </Link> {' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};;