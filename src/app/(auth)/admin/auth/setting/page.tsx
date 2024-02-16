'use client';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
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
export default function index() {
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];
    const [value, onChange] = useState<Value>(new Date());
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/admin/" onClick={() => { }}>
            admin
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/admin/auth/"
            onClick={() => { }}
        >
            auth
        </Link>,
        <Typography key="3" color="text.primary" >
            setting
        </Typography>
    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack spacing={2}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Grid>
                <Grid item xs={4} spacing={2}>
                    <Typography variant="h2">Setting</Typography>
                </Grid>
                <Grid item xs={4} className='spacing-xs-4' spacing={2}>
                    <Paper>
                        <Box p={2}>
                            <FormGroup className='spacing-xs-4'>
                                <FormControl>
                                    <InputLabel htmlFor="Username-input">Username</InputLabel>
                                    <Input id="Username-input" aria-describedby="my-helper-text" value={auth.data?.user.username} readOnly />
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="Email-input">Email</InputLabel>
                                    <Input id="Email-input" aria-describedby="my-helper-text" value={auth.data?.user.email} readOnly />
                                </FormControl>
                                <FormControl>
                                    <FormControlLabel disabled control={<Checkbox checked={auth.data?.user.confirmed} />} label="Blocked" />
                                </FormControl>
                                <FormControl>
                                    <FormControlLabel disabled control={<Checkbox checked={auth.data?.user.blocked} />} label="Blocked" />
                                </FormControl>
                                <FormControl>
                                    <DateTimePicker disabled onChange={() => { }} value={auth.data?.user.createdAt} />
                                    {/* <InputLabel htmlFor="Created-input">Created at</InputLabel>
                            <Input id="Created-input" aria-describedby="my-helper-text" value={auth.data?.user.createdAt} readOnly /> */}
                                </FormControl>
                                <FormControl>
                                    <DateTimePicker disabled onChange={() => { }} value={auth.data?.user.updatedAt} />
                                    {/* <InputLabel htmlFor="Updated-input">Updated at</InputLabel>
                            <Input id="Updated-input" aria-describedby="my-helper-text" value={auth.data?.user.updatedAt} readOnly /> */}
                                </FormControl>
                            </FormGroup>
                            <Button variant="contained">Update</Button>
                            <Button variant="contained">Change Password</Button>
                        </Box>

                    </Paper>
                </Grid >

            </Grid >
        </>

    );
}
