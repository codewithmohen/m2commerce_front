'use client'
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Tab, Tabs, Typography, Stack } from '@mui/material';
import ii from './ico_461_1669737326.png';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useState } from 'react';

// SwiperCore.use([Virtual, Navigation, Pagination]);

function SugestionSlider(props) {
    const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

    const [slides, setSlides] = useState<string[]>(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );

    return (
        // <Box >
        <Stack direction='row' sx={{ display: 'flex', justifyContent: "center", padding: 0 }}>

            <Tabs
                // value={value}
                // onChange={handlechange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label='scrollable tabs'
                sx={{ display:"flex",background: "#ef394e", marginBlock: "10px", borderRadius: 3.5 ,border:'10px solid #ef394e'}}
            >
                  <Swiper
                                // @ts-ignore
                                modules={[Virtual, Navigation, Pagination]}
                                // onSwiper={(swiper) => setSwiperRef(swiper)}
                                slidesPerView={7}
                                // centeredSlides={true}
                                spaceBetween={10}
                                pagination={{
                                    type:"custom",
                                }}
                                navigation={true}
                                virtual
                            >
                                {/* {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))} */}
                {
                    [...new Array(17)].map(item => {
                        return (
                            // <Tab>
                            <SwiperSlide >
                                <Card sx={{ width: "200px",height:'250px', marginBlock: '15px', bgcolor: "#ffffff" }}>
                                    <CardActionArea >

                                        <CardMedia
                                            // component="img"
                                            // height="140"
                                            // image={'logo.svg'}
                                            // alt="green iguana"
                                            sx={{ display: "flex", alignItems: "center", justifyContent: "center",height:'150px' }}
                                        >

                                            <Image src="/image/products/d3ab182de879fe3d2b5bde8d5ad9457db8c91a5d_1656428595.webp" alt="Picture of the author" width={100} height={100}></Image>
                                        </CardMedia>
                                        <CardContent>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                89.900 تومان
                                            </Typography>
                                            <Box sx={{width:'30px',height:"30px",bgcolor:"#ef394e",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",color:"#eee",fontSize:12}}> 
                                                18%
                                            </Box>
                                            </Box>
                                            
                                            <Typography variant="body2" color="text.secondary">
                                                18245
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                </SwiperSlide>
                            // </Tab>
                        )
                    })
                }
                            </Swiper>

            </Tabs>
            {/* // </Box> */}
        </Stack>
    );
}

export default SugestionSlider;