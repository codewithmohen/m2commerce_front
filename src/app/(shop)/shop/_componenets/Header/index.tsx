'use client';
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import HeaderUp from "./HeaderUp";
import { hideOnMobile, slidingHeader } from "../../_styles/CustomeStyles";
import NavBarList from "../NavBarList";
import PlaceIcon from '@mui/icons-material/Place';

export default function Header() {

    const [isShown, setIsShown] = React.useState<boolean>(false);
    console.log(isShown);

    const trigger = useScrollTrigger();

    return (
        <Box sx={hideOnMobile} style={{ marginTop: "95px" }}>
            <HeaderUp />
            <Slide appear={false} direction="down" in={!trigger} >
                {/* <AppBar> */}
                {/* <Toolbar> */}
                <Box sx={slidingHeader} style={{ zIndex: 100 }}>

                    <Box sx={{ display: "flex", color: "grey", alignItems: "center", ml: "30px", mb: '5px' }}>
                        <Typography sx={{ mr: "10px" }}>
                            لطفا شهر خود را گزینش کنید
                        </Typography>
                        <PlaceIcon />
                    </Box>
                    <NavBarList isShown={isShown} setIsShown={setIsShown} />
                </Box>
            </Slide>
            <Toolbar />
        </Box>
    );
}
