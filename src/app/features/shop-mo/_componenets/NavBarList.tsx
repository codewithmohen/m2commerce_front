import React, { useState } from 'react';
// import List from "next/image"
import { Tabs, Tab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Stack, ButtonGroup, Button, Toolbar } from "@mui/material";
import styles from './page.module.css';
import ProductsHover from './ProductsHover';
import PercentIcon from '@mui/icons-material/Percent';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function NavBarList(props: any) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <>
      <nav aria-lable="Side list items">
        {
          <Box sx={{ direction: "rtl" }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <ButtonGroup aria-label="text button group" sx={{ pr: 3.5 }}>
                <ProductsHover IsShown={isShown} setIsShown={setIsShown} />
                <Button
                  variant="text"
                  className={styles.button}
                  startIcon={<PercentIcon />}
                >
                  {" "}
                  شگفت انگیزها{" "}
                </Button>
                <Button
                  variant="text"
                  className={styles.button}
                  startIcon={<WhatshotIcon />}
                >
                  {" "}
                  پر فروش ترین ها{" "}
                </Button>
                <Button
                  variant="text"
                  className={styles.button}
                  startIcon={<LocalOfferIcon />}
                >
                  {" "}
                  تخفیف ها و پیشنهاد ها{" "}
                </Button>
              </ButtonGroup>
            </Stack>
          </Box>
        }
      </nav>
    </>
  );
}

export default NavBarList;