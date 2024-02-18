'use client';
import React, { useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
export default function index() {
    const [loadPage, setLoadPage] = useState(true);
    return (
        loadPage &&
        <>
            <Grid item xs={12} spacing={2}>
                <Typography gutterBottom variant="h1" component="div">
                    Welcome
                </Typography>
            </Grid>
        </>


    );
}


