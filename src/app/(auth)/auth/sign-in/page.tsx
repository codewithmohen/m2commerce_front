'use client';
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  FormControl,
  FormHelperText,
  OutlinedInput,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import Image from "next/image";
import img from "/public/logo.svg";

export default function Page() {
  const MyFormHelperText: React.FC = () => {
    const { focused }: { focused?: boolean; } = useFormControl() || {};

    const helperText: string = React.useMemo(() => {
      if (focused) {
        return "This field is being focused";
      }

      return "Helper text";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "yellow",
        //   width: "100%",
        //   height: "100%",
      }}
    >
      <Card variant="outlined">
        <Box
          sx={{
            //   display:"flex",
            padding: "10px",
            border: "1px solid grey",
            borderRadius: "5px",
            // alignItems: "center",
          }}
        >
          <Image src={img} height={50} width={100} alt="image"></Image>
          <Typography>ورود | ثبت‌نام</Typography>
          <Typography>سلام !</Typography>
          <Typography>لطفا شماره موبایل یا ایمیل خود را وارد کنید</Typography>
          <form noValidate autoComplete="off">
            <FormControl sx={{ width: "25ch" }}>
              <OutlinedInput placeholder="Please enter text" />
              {/* <MyFormHelperText /> */}
            </FormControl>
          </form>
          <Button sx={{ bgcolor: "red", width: "100%", color: "white" }}>
            ورود
          </Button>
          <Typography>لطفا شماره موبایل یا ایمیل خود را وارد کنید</Typography>
          <CardActions>
            <Box sx={{ display: "flex" }}>
              <Button size="small">مقررات</Button>و
              <Button size="small">شرایط دیجی کالا </Button>
              <Typography>
                لطفا شماره موبایل یا ایمیل خود را وارد کنید
              </Typography>
            </Box>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
