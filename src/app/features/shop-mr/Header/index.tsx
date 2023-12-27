'use client';
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import UpHeader from "./UpHeader";
import { hideOnMobile, slidingHeader } from "./../styles/CustomeStyles";
import NavBarList from "./NavBarList";
import PlaceIcon from '@mui/icons-material/Place';

export default function HideAppBar() {

  const [isShown, setIsShown] = React.useState<boolean>(false);
  console.log(isShown);

  const trigger = useScrollTrigger();

  return (
    <Box sx={hideOnMobile} style={{ marginTop: "95px" }}>
      <UpHeader />
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

          {/* <Typography variant="h6">Scroll Down to Hide App Bar</Typography> */}
          <NavBarList isShown={isShown} setIsShown={setIsShown} />


        </Box>
        {/* <Typography variant="h6">Scroll Down to Hide App Bar</Typography> */}
        {/* </Toolbar> */}
        {/* </AppBar> */}
      </Slide>

      <Toolbar />
      {/* <Container>
        <Box my={2}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container> */}
    </Box>
  );
}
