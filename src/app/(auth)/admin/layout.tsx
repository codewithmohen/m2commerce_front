'use client';
import { Box, Container, CssBaseline, Grid, Paper, ThemeProvider } from '@mui/material';
import React, { Children, useEffect, useState } from 'react';
import logo from './_assets/logo-moraba-done.svg';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/app/_components/loading';
import { default as L } from '../../admin/layout';
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <L>
            {children}
        </L>
    );
}
