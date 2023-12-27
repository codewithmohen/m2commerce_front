import { ListItemAvatar, ListItem, ListItemText, Box, Stack, Avatar, Tabs, Tab, Typography } from '@mui/material';
import React from 'react';
import imgs from "public/logo.svg"

function Linker(props) {
    return (
        <Stack direction='row' sx={{ display: 'flex', justifyContent: "center", padding: 0, mt: '25px',marginInline:'190px' }}>

            {/* <Tabs
            // value={value}
            // onChange={handlechange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label='scrollable tabs'
        > */}
            <div>
                <Avatar src={imgs} alt="OOO" sx={{ marginInline: "6vw", padding: 4, borderRadius: 20 }} />
                <Typography sx={{ textAlign: "center" }}>موارد بیشتر</Typography>
            </div>
            <div>
                <Avatar src={imgs} alt="s" sx={{ marginInline: "6vw", padding: 4, borderRadius: 20 }} />
                <Typography sx={{ textAlign: "center" }}>sasda</Typography>
            </div>

            <div>
                <Avatar src={imgs} alt="s" sx={{ marginInline: "6vw", padding: 4, borderRadius: 3 }} />
                <Typography sx={{ textAlign: "center" }}>sasda</Typography>
            </div>

            <div>
                <Avatar src={imgs} alt="s" sx={{ marginInline: "6vw", padding: 4, borderRadius: 20 }} />
                <Typography sx={{ textAlign: "center" }}>sasda</Typography>
            </div>

            <div>
                <Avatar src={imgs} alt="s" sx={{ marginInline: "6vw", padding: 4, borderRadius: 3 }} />
                <Typography sx={{ textAlign: "center" }}>sasda</Typography>
            </div>

            {/* {[...Array(5)].map((tab) => { */}
            {/* return (<Tab key={tab.id} label={tab.text} />) */}
            {/* } */}
            {/* )} */}
            {/* </Tabs> */}
        </Stack>
    );
}

export default Linker;