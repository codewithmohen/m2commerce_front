<<<<<<< HEAD
'use client';
import { useState } from 'react';
import 'react-data-grid/lib/styles.css';
import Grid from '@mui/material/Grid';
import { Box, Chip, Typography } from '@mui/material';
import Loading from './_components/loading';
import { StyledTable, TableContainer } from "./tableStyle";
import { createColumnHelper, useReactTable, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel, flexRender, ColumnDef } from '@tanstack/react-table';
import Button from '@mui/material/Button';
import {
    Paper,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
export default function index() {
    const [loadPage, setLoadPage] = useState(true);
    const data = [
        {
            "Application_No": 1036,
            "Name": "NABILA TOHEED",
            "DOB": "15-Dec-1998",
            "status": "active"
        },
        {
            "Application_No": 1072,
            "Name": "PIRHA MASOOD",
            "DOB": "17-Jan-1997",
            "status": "active"
        },
        {
            "Application_No": 1294,
            "Name": "MUHAMMAD ASHAR NAEEM",
            "DOB": "20-Feb-1998",
            "status": "active"
        },
        {
            "Application_No": 1294,
            "Name": "MUHAMMAD ASHAR NAEEM",
            "DOB": "20-Feb-1998",
            "status": "active"
        },
        {
            "Application_No": 1294,
            "Name": "MUHAMMAD ASHAR NAEEM",
            "DOB": "20-Feb-1998", "status": "inactive"
        },
        {
            "Application_No": 1467,
            "Name": "IQRA ASLAM",
            "DOB": "15-Aug-1997", "status": "inactive"
        },
        {
            "Application_No": 1039,
            "Name": "FAIZA RUSTAM",
            "DOB": "10-Oct-1997", "status": "inactive"
        },
        {
            "Application_No": 1467,
            "Name": "IQRA ASLAM",
            "DOB": "15-Aug-1997", "status": "active"
        },
        {
            "Application_No": 1021,
            "Name": "SAIRA rAFIQ",
            "DOB": "11-Nov-1998", "status": "active"
        },
        {
            "Application_No": 1016,
            "Name": "ROHA FARHAN LODHI",
            "DOB": "30-Mar-1998", "status": "inactive"
        },
        {
            "Application_No": 1025,
            "Name": "HAFSA QAZI",
            "DOB": "31-Jan-1999", "status": "active"
        },
    ];
    type Student = {
        Application_No: number;
        Name: string;
        DOB: string;
        status: string;
        activity: any;
    };
    const columnHelper = createColumnHelper<Student>();
    const columns: ColumnDef<any, any>[] = [
        columnHelper.accessor("Application_No", {
            header: "Registration No",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("Name", {
            header: "Name",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("DOB", {
            header: "Date of Birth",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("status", {
            header: "Status",
            cell: (info: any) => {
                return (
                    <Chip
                        label={info.getValue()}
                        size="small"
                        color={info.getValue() === "active" ? "default" : "default"}
                    />
                );
            },
        }),
        columnHelper.accessor("activity", {
            header: "activity",
            cell: (info: any) => {
                return (
                    <>
                        <Button>update { }</Button>
                        <Button>delete { }</Button>
                    </>
                );
            }
        }),
    ];

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: 1,
        // getExpandedRowModel: getExpandedRowModel(),
        // getFacetedMinMaxValues: getFacetedMinMaxValues(),
        // getFacetedRowModel: getFacetedRowModel(),
        // getFacetedUniqueValues: getFacetedUniqueValues(),
        // getFilteredRowModel: getFilteredRowModel(),
        // getGroupedRowModel: getGroupedRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        // getSortedRowModel: getSortedRowModel(),
    });

    return (
        loadPage &&
        <>
            <Box padding={6}>
                <Paper elevation={2} style={{ padding: "2rem" }}>
                    <MuiTable>
                        <TableHead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableCell key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </MuiTable>
                </Paper>
            </Box>
        </>
    );
=======
"use client";

import Shop from "./features/shop-mr/page";

export default function Home() {
  return (
    <>
      <Shop/>
    </>
  );
>>>>>>> main
}


