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
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
export default function index() {
    const auth = useSelector((state: any) => state.auth) as IAuthState;



    return (
        <>

            <Grid item xs={4}>

                <Typography variant="h2">Auth</Typography>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/admin/auth/change-password">
                                <ListItemText primary="Change Password" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Grid>
            <Grid item xs={8}>
                <Paper>
                    <Box p={2}>
                        <FormGroup >
                            <FormControl sx={{ m: 2 }}>
                                <InputLabel htmlFor="Username-input">Username</InputLabel>
                                <Input id="Username-input" aria-describedby="my-helper-text" value={auth.data?.user.username} readOnly />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <InputLabel htmlFor="Email-input">Email</InputLabel>
                                <Input id="Email-input" aria-describedby="my-helper-text" value={auth.data?.user.email} readOnly />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <FormControlLabel disabled control={<Checkbox checked={auth.data?.user.confirmed} />} label="Blocked" />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <FormControlLabel disabled control={<Checkbox checked={auth.data?.user.blocked} />} label="Blocked" />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <DateTimePicker disabled onChange={() => { }} value={auth.data?.user.createdAt} />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <DateTimePicker disabled onChange={() => { }} value={auth.data?.user.updatedAt} />
                            </FormControl>
                            {/* <FormControl sx={{ m: 2 }}>
                                <Button variant="contained">Update</Button>
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <Button variant="contained">Change Password</Button>
                            </FormControl> */}
                        </FormGroup>
                    </Box>
                </Paper>
            </Grid >

        </>

    );
}
