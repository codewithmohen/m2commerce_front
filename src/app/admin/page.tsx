'use client';
import React, { useState } from 'react';
import useSecure from '../_hooks/useSecure';
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import Grid from '@mui/material/Grid';
export default function index() {
    const [loadPage, setLoadPage] = useState(false);
    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'user', name: 'User' }
    ];
    const rows = [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
    ];
    useSecure(setLoadPage);
    return (
        loadPage &&
        <>
            <Grid item xs={12} >
                <DataGrid columns={columns} rows={rows} />
            </Grid>
        </>


    );
}


