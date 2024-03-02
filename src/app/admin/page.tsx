'use client';
import React, { useState } from 'react';
import useSecure from '../_hooks/useSecure';
import 'react-data-grid/lib/styles.css';
import { createColumnHelper, flexRender, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import DataGrid from 'react-data-grid';
import Grid from '@mui/material/Grid';
import Table from "@tanstack/react-table";
export default function index() {
    const [loadPage, setLoadPage] = useState(false);

    useSecure(setLoadPage);
    return (
        loadPage &&
        <>
            <Grid item xs={12} >

            </Grid>

        </>


    );
}


