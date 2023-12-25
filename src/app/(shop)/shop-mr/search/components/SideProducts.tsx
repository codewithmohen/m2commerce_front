'use client'
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, Paper } from '@mui/material';
import GradingIcon from '@mui/icons-material/Grading';
import { styled } from '@mui/material/styles';
import CardProducts from './CardProducts';

const SideProducts = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
         height:"400px",
        borderRadius:0,
        // borderRight:'1px Solid white'
    }));

    return (
      <Box sx={{ bgcolor: "grey", width: "100%", mr: 3 }}>
        <Box sx={{bgcolor:"white" , display: "flex", justifyContent: "space-between",pb:2 }}>
          <Box>
            <Typography>کالا 8,222</Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ marginInline: "10px" }}>گرانترین</Typography>
            <Typography sx={{ marginInline: "10px" }}>
              ارزان ترین
            </Typography>
            <Typography sx={{ marginInline: "10px" }}>
              پرطرفدارترین
            </Typography>

            <Typography sx={{ marginInline: "5px" }}>
              :مرتب سازی
            </Typography>
            <GradingIcon />
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1}}>
          <Grid
            container
            spacing={{ xs: 0.1, md: 0.1 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {Array.from(Array(18)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  xs=2
                  <CardProducts />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
};

export default SideProducts;