'use client'
import {
  Box,
  Button,
  Card,
  CardActions,
  FormHelperText,
  OutlinedInput,
  TextField,
  Typography,
  useFormControl,
  FormControl,
} from "@mui/material";
import Image from "next/image";
import img from "/public/logo.svg";
import React from "react";


const Login = () => {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          direction: "rtl",
        }}
      >
        <Card >
          <Box
            sx={{
              padding: "10px",
              border: "1px solid #72738d",
              borderRadius: "5px",
              paddingInline: "25px",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "center", marginBlock: 2 }}
            >
              <Image src={img} height={50} width={150} alt="image"></Image>
            </Box>
            <Typography variant="h5">ورود | ثبت‌ نام</Typography>
            <Typography component={"p"} sx={{ mt: 2, mb: 1, color: "#72738d" }}>
              سلام !
            </Typography>
            <Typography sx={{ mb: 2, color: "#72738d" }}>
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: "15px",
                  mb: 6,
                }}
              >
                <OutlinedInput placeholder="Please enter text" />
                {/* <MyFormHelperText /> */}
              </FormControl>
            </form>
            <Button
              sx={{
                bgcolor: "#ef4056",
                width: "100%",
                color: "white",
                borderRadius: 1,
                mb: 2,
              }}
            >
              ورود
            </Button>
            <CardActions>
              <Box sx={{ display: "flex", textIndent: "5px" }}>
                <Typography>ورود شما به معنای پذیرش</Typography>
                <Box sx={{ textDecoration: "none" }} component={"a"} href="#">
                  مقررات
                </Box>
                و
                <Box sx={{ textDecoration: "none" }} component={"a"} href="#">
                  شرایط دیجی کالا
                </Box>
                است .
              </Box>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;


