import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import img from "/public/image/products/d3ab182de879fe3d2b5bde8d5ad9457db8c91a5d_1656428595.webp"
import Image from 'next/image';
import Link from 'next/link';
const CardProducts = () => {
    return (
      // <Card sx={{ width: "100%"}}>
      <Link href="/shop-mr/product/">
        <CardMedia
        // sx={{ height: 140 }}
        // image={img}
        // title="green iguana"
        />
        <Image src={img} alt="Picture of the author" height={100} width={100} />
        <CardContent>
          {/* <Box></Box> */}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ bgcolor: "red" }}
          >
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Link>
      // </Card>
    );
};

export default CardProducts;