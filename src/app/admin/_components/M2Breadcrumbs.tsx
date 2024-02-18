import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
let urlArray = window.location.pathname.split('/').slice(1);
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
let href = '';
let up = '/' + window.location.pathname.split('/').slice(1, -1).join('/').toString();
const breadcrumbs = [
    <>
        {
            urlArray.map((key, index) => {
                href += '/' + key;
                if (index < urlArray.length - 1)
                    return (
                        <>
                            <ArrowForwardIosIcon fontSize='small' sx={{ ml: 1, mr: 2, color: "snow" }} />
                            <Link variant="h6" underline="hover" key={index} color="snow" href={href}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Link>
                        </>
                    );

                else
                    return (
                        <>
                            <ArrowForwardIosIcon fontSize='small' sx={{ ml: 1, mr: 2, color: "snow" }} />
                            <Typography variant="h6" key={index} color="snow" sx={{ display: 'inline' }}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Typography >
                        </>
                    );
            })}
    </>
];
export default function M2Breadcrumbs() {
    return (
        urlArray.length > 1 && <>
            <Stack spacing={2} sx={{ p: 2, border: 1, borderColor: 'primary.light', bgcolor: 'primary.main', borderRadius: 1 }}>
                <Grid
                    container
                    justifyContent={'space-between'}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Link href={up}>
                        <DriveFolderUploadIcon fontSize='large' sx={{ ml: 1, mr: 2, color: "snow" }} />
                    </Link>

                </Grid>
            </Stack>
        </>
    );
}
