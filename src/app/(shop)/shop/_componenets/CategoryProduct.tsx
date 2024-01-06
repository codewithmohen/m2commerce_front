'use client';
import { Stack, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CategoryProduct = () => {

    const DIV = styled(Box)(({ theme }) => ({
        textAlign: "center",
        backgroundColor: "brown",
        marginInline: "22.5px",
        marginBlock: ".5vw",
        [theme.breakpoints.up('md')]: {
            marginInline: "22.5px",
            backgroundColor: "yellow",
        },
    }));

    return (
        <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", bgcolor: "blue", mt: '15px', border: "2px solid grey", borderRadius: 3 }}>
            <Typography variant='h5' sx={{ mb: "12px" }}>خرید بر اساس دسته بندی</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    [...Array(13)].map(i => {
                        return (
                            <DIV>
                                <Box sx={{ marginInline: "auto", bgcolor: "black", width: "80px", height: "80px", borderRadius: "40px" }}>

                                </Box>
                                <Typography sx={{ textAlign: "center", mt: '12px' }}>دوغ و لبنیات و ماست{i}</Typography>
                            </DIV>
                        );
                    })
                }
            </Box>
        </Stack>
    );
};

export default CategoryProduct;