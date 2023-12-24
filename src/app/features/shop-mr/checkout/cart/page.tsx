"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import img from "/public/image/basket/empty-cart.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        direction: "rtl",
        justifyContent: "center",
        paddingInline: "4%",
        bgcolor: "orange",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="سبد خرید" {...a11yProps(0)} />
          <Tab label="خرید بعدی" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingInline: "4%",
          border: "1px solid grey",
          borderRadius: "15px",
          mt: "20px",
          display: "flex",
          justifyContent: "center",
          // bgcolor: "blue",
        }}
      >
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ textAlign: "center", bgcolor: "red" }}>
            <Image src={img} alt="image-empty" width={200} height={200} />
            <Typography variant="h5">سبد خرید شما خالی است!</Typography>
            <Typography variant="h6">
              می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
            </Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box sx={{ textAlign: "center", bgcolor: "red" }}>
            <Image src={img} alt="image-empty" width={200} height={200} />
            <Typography variant="h5">لیست خرید بعدی شما خالی است!</Typography>
            <Typography variant="h6">
              شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد
              خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل
              بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
            </Typography>
          </Box>
        </CustomTabPanel>
      </Box>

      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
