"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { hideOnMobile } from "../../../styles/CustomeStyles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import logo from "/public/digifa.svg";
import delivery from "/public/icons/express-delivery.svg";
import daysReturn from "/public/icons/days-return.svg";
import support from "/public/icons/support.svg";
import cash from "/public/icons/cash-on-delivery.svg";
import orginal from "/public/icons/original-products.svg";
import Linker_footer from "./components/Linker_footer";
import TopFooter from "./components/TopFooter";
import BottomFooter from "./components/BottomFooter";
import CakeSlice from "../../../features/cake/CakeView"
import UserView from "../../../features/user/UserView";
// /app/features / cake / cakeSlice";

const Footer = () => {
  return (
    <Box sx={hideOnMobile} style={{ backgroundColor: "blue" }}>
      <Stack sx={{ bgcolor: "green", width: "100%" }}>
        <TopFooter />
        <Linker_footer />

        <BottomFooter />
        <CakeSlice />
        <UserView/>
      </Stack>
    </Box>
  );
};

export default Footer;
