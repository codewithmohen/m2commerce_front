import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { hideOnMobile } from '../styles/CustomeStyles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import logo from "/public/digifa.svg";
import delivery from '/public/icons/express-delivery.svg';
import daysReturn from '/public/icons/days-return.svg';
import support from '/public/icons/support.svg';
import cash from '/public/icons/cash-on-delivery.svg';
import orginal from '/public/icons/original-products.svg';
import Linker_footer from './components/Linker_footer';

const Footer = () => {
    return (
        <Box sx={hideOnMobile} style={{ backgroundColor: "blue" }}>
            <Stack sx={{ bgcolor: "green", width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1, marginInline: 3, mt: 3 }} style={{ backgroundColor: "orange" }}>
                    <Box >
                        <Button variant="outlined" startIcon={<KeyboardArrowUpIcon />}>
                            بازگشت به بالا
                        </Button>
                    </Box>
                    <Box sx={{ mt: "-10px", justifyContent: "start", direction: "rtl" }}>
                        <Image src={logo} alt='logo' width={120} height={50} ></Image>
                        <Typography>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
                            |
                            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</Typography>
                    </Box>
                </Box>

                <Box sx={{ bgcolor: "red", display: "flex",justifyContent:"space-around",marginBlock:'40px'}}>
                    <Box>
                        <Image src={delivery} alt='logo' width={120} height={50}></Image>
                        <Typography>امکان تحویل اکسپرس</Typography>
                    </Box>
                    <Box>
                        <Image src={daysReturn} alt='logo' width={120} height={50}></Image>
                        <Typography>هفت روز ضمانت بازگشت کالا</Typography>
                    </Box>
                    <Box>
                        <Image src={support} alt='logo' width={120} height={50}></Image>
                        <Typography> هفت روز هفته و 24 ساعته </Typography>
                    </Box>
                    <Box>
                        <Image src={cash} alt='logo' width={120} height={50}></Image>
                        <Typography>امکان پرداخت در محل</Typography>
                    </Box>
                    <Box>
                        <Image src={orginal} alt='logo' width={120} height={50}></Image>
                        <Typography>ضمانت اصل بودن کالا</Typography>
                    </Box>
                </Box>

                <Linker_footer/>


                <Box sx={{borderTop:".5px solid grey",marginInline:3}}>
                    <Typography sx={{paddingBlock:"20px",textAlign:"center"}} variant="body2">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</Typography>
                </Box>
                <Box sx={{display:"flex",background:"blue",marginInline:.5}}>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                </Box>
                <Box sx={{display:"flex",background:"blue",marginInline:.5}}>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                    <Box sx={{border:"1.5px solid grey",textAlign:"center",paddingBlock:"25px",width:"calc(100% - 12px)"}}>aadda</Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Footer;