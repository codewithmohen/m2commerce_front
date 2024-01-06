import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "/public/logo.svg";
import SearchBox from "../SearchBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { hideOnMobile } from "../../_styles/CustomeStyles";
import Link from "next/link";
function UpHeader() {
  return (
    <AppBar sx={{ bgcolor: "#eee" }}>
      <Toolbar sx={hideOnMobile}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}
        >
          <Box
            component="div"
            color={"grey"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link href="/features/shop-mr/checkout/cart">
              <Button>
                <ShoppingCartIcon />
              </Button>
            </Link>
            |
            <Link href="/features/auth-mr/users/login">
              <Button
                variant="outlined"
                sx={{ ml: "30px", border: "1px solid" }}
              >
                <Typography>ورود | ثبت نام</Typography>
                <LoginIcon sx={{ ml: "6px" }} />
              </Button>
            </Link>
          </Box>

          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <SearchBox />
            <Image src={logo} alt="logo" width={100} height={100}></Image>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default UpHeader;
