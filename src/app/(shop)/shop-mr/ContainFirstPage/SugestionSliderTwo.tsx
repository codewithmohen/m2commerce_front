'use client'
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Tab, Tabs, Typography, Stack } from '@mui/material';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';


const SugestionSliderTwo = () => {
    // const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

    // const [slides, setSlides] = useState<string[]>(
    //     Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    // );
    return (
        <>
                    <Typography variant='h5' sx={{ mb: "12px",textAlign:"center",mt:"12px" }}>پیشنهاد دی جیکالا</Typography>

        
        <Stack direction='row' sx={{ display: 'flex', justifyContent: "center", padding: 0 }}>

            <Tabs sx={{ display: "flex", borderRadius: 3.5, border: '.1px solid grey', mt: "20px" }}>
                <Swiper
                    // @ts-ignore
                    modules={[Virtual, Navigation, Pagination]}
                    // onSwiper={(swiper) => setSwiperRef(swiper)}
                    slidesPerView={7}
                    // centeredSlides={true}
                    // spaceBetween={10}
                    pagination={{
                        type: "custom",
                    }}
                    navigation={true}
                    virtual
                >

                    {
                        [...new Array(17)].map(i => {
                            return (
                                // <Tab>
                                <SwiperSlide >
                                    <Box sx={{ bgcolor: "white" }}>

                                        <Box sx={{ border: "0.1px solid grey", paddingBlock: "10px" }}>
                                            <Box sx={{ marginInline: "auto", bgcolor: "black", width: "80px", height: "80px", borderRadius: "40px" }}>
                                            </Box>
                                            <Typography sx={{ textAlign: "center", mt: '12px' }}>دوغ و ماست{i}</Typography>
                                        </Box>

                                        <Box sx={{ border: ".1px solid grey", paddingBlock: "10px" }}>
                                            <Box sx={{ marginInline: "auto", bgcolor: "black", width: "80px", height: "80px", borderRadius: "40px" }}>
                                            </Box>
                                            <Typography sx={{ textAlign: "center", mt: '12px' }}>دوغ و ماست{i}</Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                                // </Tab>
                            )
                        })
                    }

                </Swiper>
            </Tabs>
        </Stack>
        </>
    );
};

export default SugestionSliderTwo;