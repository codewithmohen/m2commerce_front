'use client';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useSelector } from 'react-redux';
import { IAuthState } from '@/app/(auth)/_reducer/interfaces';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import M2Breadcrumbs from '@/app/admin/_components/M2Breadcrumbs';
export default function index() {
    const auth = useSelector((state: any) => state.auth) as IAuthState;


    return (
        <>

            <Grid item xs={4} spacing={2}>
                <Typography variant="h2">Update</Typography>
            </Grid>
            <Grid item xs={8} spacing={2}>
                <Paper>
                    <Box p={2}>
                        <FormGroup >
                            <FormControl sx={{ m: 2 }}>
                                <InputLabel htmlFor="Username-input">Username</InputLabel>
                                <Input id="Username-input" aria-describedby="my-helper-text" value={auth.data?.user.username} />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <InputLabel htmlFor="Email-input">Email</InputLabel>
                                <Input id="Email-input" aria-describedby="my-helper-text" value={auth.data?.user.email} />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <FormControlLabel control={<Checkbox />} label="Blocked" />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <FormControlLabel control={<Checkbox />} label="Blocked" />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <Button variant="contained">Update</Button>
                            </FormControl>
                        </FormGroup>
                    </Box>
                </Paper>
            </Grid >

        </>

    );
}
