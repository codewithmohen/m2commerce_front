'use client';
import { useState } from 'react';
import 'react-data-grid/lib/styles.css';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
export default function index() {
    const [loadPage, setLoadPage] = useState(true);
    return (
        loadPage &&
        <>
            <Typography gutterBottom variant="h1" component="div">
                Welcome
            </Typography>
        </>
    );
}


