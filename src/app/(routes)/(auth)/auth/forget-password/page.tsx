'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Loading from '../../../../_components/loading';


export default function index() {
    const defaultTheme = createTheme();
    const [loadPage, setLoadPage] = useState(true);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    useEffect(() => {
        setLoadPage(false);
    }, []);
    return (
        <>
            {loadPage && (<Loading />)}
            <>
                {!loadPage &&

                    (
                        <>
                            <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                                <SentimentVeryDissatisfiedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Forget Password
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Send Mail
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="./sign-in" variant="body2">
                                            Back
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    )}
            </>
        </>
    );
}