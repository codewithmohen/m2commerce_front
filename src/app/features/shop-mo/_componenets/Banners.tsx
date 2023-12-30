'use client'
import { Stack, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
// import Grid from '@mui/material/Unstable_Grid2';

const Banners = () => {

    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        // width: '20vw',
        // height: '15vw',
        width: '310px',
        height: '260px',
        // borderRadius: 15,
        backgroundColor: "red",
        // marginInline: "2px",
        [theme.breakpoints.down('lg')]: {
            width: '210px',
            height: '160px',
            // marginInline: "160px"
        },
        [theme.breakpoints.down('md')]: {
            width: '40vw',
            height: '35vw',
            // marginInline: "160px"
        },
    }));

    const DIV = styled('div')(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // display:"flex",
        // justifyContent:"center",
        // alignItems:'center',
        // flexGrow:1,
        background: "yellow",
        width: "100%",
        marginRight: "4.6vw",
        // marginInline:"auto",
        // margin:"auto",
        marginLeft: "2.6vw",
        // padding:"auto",
        [theme.breakpoints.down('lg')]: {
            background: "grey",

            // width: '40vw',
            // height: '35vw',
            marginInline: "3.6%"
            // marginRight:"50%",
            // margin: "7.8%",
        },
    }));
    return (
        <>

            <Stack direction='row' sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", bgcolor: "blue", mt: '15px', border: "2px solid grey", borderRadius: 3 }}>
                d
            </Stack>

            <Stack direction='row' sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", bgcolor: "blue", mt: '15px', border: "2px solid grey", borderRadius: 3 }}>
                <DIV>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 5, md: 5 }}>
                        <Grid item xs={6} sm={6} md={3}>
                            <Item>
                                {/* <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", width: 210, height: 160, borderRadius: 3, bgcolor: "blue" }}>
                    </Box> */}
                                1
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                            <Item>2</Item>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                            <Item>3</Item>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                            <Item>4</Item>
                        </Grid>
                    </Grid>
                </DIV>
            </Stack>


        </>

    );
};

export default Banners;