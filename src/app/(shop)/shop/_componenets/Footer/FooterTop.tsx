import { Box, Button, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import logo from "/public/digifa.svg";
import delivery from '/public/icons/express-delivery.svg';
import daysReturn from '/public/icons/days-return.svg';
import support from '/public/icons/support.svg';
import cash from '/public/icons/cash-on-delivery.svg';
import orginal from '/public/icons/original-products.svg';

const FooterTop = () => {
    return (
        <>
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

            <Box sx={{ bgcolor: "red", display: "flex", justifyContent: "space-around", marginBlock: '40px' }}>
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
        </>
    );
};

export default FooterTop;