'use client';
import { Box, Container, CssBaseline, Grid } from '@mui/material';
import React, { } from 'react';

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
