import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useEffect, useState } from 'react';
import React from 'react';
let up: any = null;

export default function M2Breadcrumbs() {
    const [breadcrumbs, setBreadcrumbs] = useState<any>([]);
    useEffect(() => {
        if (window.location.pathname.split('/').length > 1) {
            let urlArray = window.location.pathname.split('/').slice(1);
            let href = '';
            up = '/' + window.location.pathname.split('/').slice(1, -1).join('/').toString();
            let breadcrumbsTemp = [
                urlArray.map((key, index) => {
                    href += '/' + key;
                    return (index < urlArray.length - 1) ?
                        <div key={index}>
                            <ArrowForwardIosIcon fontSize='small' sx={{ ml: 1, mr: 2, color: "snow" }} />
                            <Link variant="h6" underline="hover" key={index} color="snow" href={href}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Link>
                        </div>
                        :
                        <div key={index}>
                            <ArrowForwardIosIcon fontSize='small' sx={{ ml: 1, mr: 2, color: "snow" }} />
                            <Typography variant="h6" key={index} color="snow" sx={{ display: 'inline' }}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Typography >
                        </div>;
                })
            ];
            setBreadcrumbs([...breadcrumbsTemp]);
        }
    }, []);

    useEffect(() => {
        console.log(breadcrumbs);
    }, [breadcrumbs]);
    return (
        breadcrumbs &&
        (<Stack spacing={2} sx={{ p: 2, border: 1, borderColor: 'primary.light', bgcolor: 'primary.main', borderRadius: 1 }}>
            <Grid
                container
                justifyContent={'space-between'}>
                <Breadcrumbs
                    // separator={<NavigateNextIcon fontSize="small" />}
                    separator={''}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
                <Link href={up}>
                    <DriveFolderUploadIcon fontSize='large' sx={{ ml: 1, mr: 2, color: "snow" }} />
                </Link>
            </Grid>
        </Stack>
        ));
}
