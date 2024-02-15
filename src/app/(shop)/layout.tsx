'use client';
import { Box, Container, CssBaseline, Grid, Paper, ThemeProvider } from '@mui/material';
import React, { Children, useEffect, useState } from 'react';
import logo from './_assets/logo-moraba-done.svg';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/app/_components/loading';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html>
                <body>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                            <Grid container >
                                <Grid item xs={12}>
                                    HEADER
                                </Grid>
                                <Grid item xs={12}>
                                    {children}
                                </Grid>
                                <Grid item xs={12}>
                                    FOOTER
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </body>
            </html >
        </>
    );
}
