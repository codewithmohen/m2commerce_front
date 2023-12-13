import { Box, Button, FormControl, Link, List, ListItem, ListItemText, OutlinedInput, Stack, Typography, useFormControl } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormHelperText from '@mui/material/FormHelperText';
import React, { useMemo } from 'react';

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = useMemo(() => {
//     if (focused) {
//       return 'This field is being focused';
//     }

//     return 'Helper text';
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }
const MyFormHelperText: React.FC = () => {
    const { focused }: { focused?: boolean } = useFormControl() || {};

    const helperText: string = useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }

        return 'Helper text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
};

const Linker_footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: "red", display: "flex", justifyContent: "space-between", marginBlock: '40px', marginInline: 3 }}>

                <Box sx={{ textAlign: "right" }}>
                    {/* <Image src={daysReturn} alt='logo' width={120} height={50}></Image> */}
                    <Typography variant="h6" component="div">همراه ما باشید!</Typography>
                    <Box sx={{ mt: 1, mb: 2 }}>
                        <Link href="#" underline="none"><GroupWorkIcon /></Link>
                        <Link href="#" underline="none" sx={{ marginInline: 2 }}><LinkedInIcon /></Link>
                        <Link href="#" underline="none"><TwitterIcon /></Link>
                        <Link href="#" underline="none" sx={{ marginInline: 2 }}><InstagramIcon /></Link>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</Typography>

                    <form noValidate autoComplete="off">
                        <Button variant="contained" sx={{ mr: '12px', height: "7ch" }}>ثبت</Button>
                        <FormControl sx={{ width: '25ch', direction: 'rtl' }}>
                            <OutlinedInput placeholder="ایمیل خود را وارد کنید" />
                            <MyFormHelperText />
                        </FormControl>

                    </form>

                </Box>
                <Box sx={{ textAlign: "right" }}>
                    {/* <Image src={support} alt='logo' width={120} height={50}></Image> */}
                    <Typography variant="h6" component="div">راهنمای خرید از دیجی‌کالا</Typography>
                    {/* <List>
          
                <ListItem>
                  <ListItemText
                    primary="نحوه ثبت سفارش"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemText
                    primary="رویه ارسال سفارش"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemText
                    primary="شیوه های پرداخت"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                  
                </ListItem>,
              
            </List> */}
                    <Typography>نحوه ثبت سفارش</Typography>
                    <Typography>رویه ارسال سفارش</Typography>
                    <Typography>شیوه های پرداخت</Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                    {/* <Image src={cash} alt='logo' width={120} height={50}></Image> */}
                    <Typography variant="h6" component="div">خدمات مشتریان</Typography>
                    <Typography>پاسخ به پرسش های متداول</Typography>
                    <Typography>رویه های بازگرداندن کالا</Typography>
                    <Typography>شرایط استفاده</Typography>
                    <Typography>حریم خصوصی</Typography>
                    <Typography>گزارش باگ</Typography>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                    {/* <Image src={orginal} alt='logo' width={120} height={50}></Image> */}
                    <Typography variant="h6" component="div">با دیجی کالا</Typography>
                    <Typography>اتاق خبر</Typography>
                    <Typography>فروش در دیجی کالا</Typography>
                    <Typography>فرصت شغلی</Typography>
                    <Typography>گزارش تخلف در دیجی کالا</Typography>
                    <Typography>تماس با دیجی کالا</Typography>
                    <Typography> درباره دیجی کالا</Typography>
                </Box>

            </Box>

            <Box sx={{ bgcolor: "blue", marginInline: 3, borderRadius: '5px' }}>
                <Typography sx={{ textAlign: "center" }}>sdsaa</Typography>
            </Box>
        </>
    );
};

export default Linker_footer;