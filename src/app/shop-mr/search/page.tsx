'use client'
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, Paper } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GradingIcon from '@mui/icons-material/Grading';
import { styled } from '@mui/material/styles';
import SideProducts from './components/SideProducts';

const Search = () => {

    return (
        <>
            <Typography sx={{ mt: '120px', textAlign: "end", mr: 3 }} variant='h5'>لپ تاپ و الترابوک لنوو</Typography>

            <Box sx={{
                display: 'flex',
                mt: 8,
                marginInline: 3,
                // width: '100vw',
                overflow: 'hidden',
                // bgcolor: "red",
                justifyContent: "space-between",
            }}>

               <SideProducts/>

                <aside style={{ width: '370px' }}>
                    <Box sx={{
                        width: "100%",
                        // flexBasis: '270px',
                        // flexGrow: 0,
                        // flexShrink: 0,
                        // bgcolor: "blue",
                        border: "1px solid grey",
                        borderRadius: "10px",

                        // overflowY: 'auto'
                    }}>
                        <Box>
                            <Box sx={{ marginInline: 2, mt: 2, textAlign: "end", display: "flex", justifyContent: "space-between" }}>

                                <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                                    variant='button' display='block' gutterBottom>
                                    حذف فیلترها
                                </Typography>

                                <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                                    variant='button' display='block' gutterBottom>
                                    فیلترها
                                </Typography>
                            </Box>
                            {
                                [...Array(5)].map((item, k) => {
                                    return (
                                        <nav key={k} aria-lable="Side list items">
                                            <List sx={{ borderBottom: '1px solid #ddd', marginInline: '10px' }}>
                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{ textAlign: "end" }}>
                                                        <ListItemIcon><LocalOfferIcon /></ListItemIcon>
                                                        <ListItemText>{item}sghl</ListItemText>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    )
                                })
                            }
                        </Box>

                        <Box>

                        </Box>
                    </Box>
                </aside>

            </Box>
        </>
    );
};

export default Search;