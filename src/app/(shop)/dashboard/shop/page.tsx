'use client';
import Layout from '../../../dashboard/layout';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Products from "./products/page";

export default function index() {
    return (
        <Layout>
            <Container>
                <Products />
            </Container>
        </Layout>
    );
}



