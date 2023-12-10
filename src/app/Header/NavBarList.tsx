import React, { useState } from 'react';
// import List from "next/image"
import { Tabs, Tab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Stack, ButtonGroup, Button, Toolbar } from "@mui/material"
import styles from './page.module.css'
import ProductsHover from './ProductsHover';
import PercentIcon from '@mui/icons-material/Percent';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// interface NavBarProps {
//     setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
//     isShown: boolean;
// }


// const NavBarList: React.FC<NavBarProps> = ({ setIsShown, isShown }) => {

    function NavBarList(){
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const [isShown, setIsShown] = useState<boolean>(false);
    console.log(isShown);

    return (
        <>
            <nav aria-lable="Side list items">
                {/* <List  
 href="/dashboard"
>*/}
                {
                    // [...Array(5)].map(item => (
                    //     <List sx={{ p: 0 ,display:"flex"}}>
                    //         <ListItem sx={{display:"flex"}}>
                    //             <ListItemButton>
                    //                 <ListItemIcon>ssf</ListItemIcon>
                    //                 <ListItemText>safsas</ListItemText>
                    //             </ListItemButton>
                    //         </ListItem>
                    //     </List>

                    //     <Tabs
                    //     value={value}
                    //     onChange={handleChange}
                    //     textColor="secondary"
                    //     indicatorColor="secondary"
                    //     aria-label="secondary tabs example"
                    //   >
                    //     <Tab value="one" label="Item One" />
                    //     <Tab value="two" label="Item Two" />
                    //     <Tab value="three" label="Item Three" />
                    //   </Tabs>

                    <Box sx={{ direction: "rtl" }}>

                        <Stack direction="row" spacing={2} alignItems="flex-start" >
                            <ButtonGroup aria-label="text button group" sx={{ pr: 3.5}}>

                                <ProductsHover IsShown={isShown} setIsShown={setIsShown} />

                                {/* <span className={styles.line}>|</span> */}

                                {/* <button className={styles.button}>شگفت انگیزها </button>
                                <button className={styles.button}>پر فروش ترین ها</button>
                                <button className={styles.button}> تخفیف ها و پیشنهاد ها</button> */}
                                <Button variant="text" className={styles.button} startIcon={<PercentIcon />} > شگفت انگیزها </Button>
                                <Button variant="text" className={styles.button} startIcon={<WhatshotIcon />} > پر فروش ترین ها </Button>
                                <Button variant="text" className={styles.button} startIcon={<LocalOfferIcon />} >  تخفیف ها و پیشنهاد ها </Button>

                                {/* <span className={styles.line}>|</span> */}

                            </ButtonGroup>
                        </Stack>
                    </Box>

                    // ))
                }
                {/* </List> */}

            </nav>
        </>
    );
}

export default NavBarList;