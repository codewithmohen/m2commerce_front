import { ListItemAvatar, ListItem, ListItemText, Box, Stack, Avatar, Tabs, Tab, Typography } from '@mui/material';
import React from 'react';
import imgs from "logo.svg"
// import WorkIcon from "@mui/icons-material/Icons"
function Stories(props) {
    return (

        <Stack direction='row' sx={{display:'flex',justifyContent:"center", padding: 0 }}>

            <Tabs
                // value={value}
                // onChange={handlechange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label='scrollable tabs'
            >
                <div>
                    <Avatar src={'logo.svg'} alt="s" sx={{ marginInline: 10, padding: 4, borderRadius: 20, border: `3px solid red`, }} />
                    <Typography sx={{ textAlign: "center" }}>sasda</Typography>
                </div>

                <div>
                    <Avatar src={'logo.svg'} alt="s" sx={{ marginInline: 10, padding: 4, borderRadius: 20, border: `3px solid red`, }} />
                    <Typography sx={{ textAlign: "center" }}>sasda</Typography>
                </div>
                <div>
                    <Avatar src={'logo.svg'} alt="s" sx={{ marginInline: 10, padding: 4, borderRadius: 20, border: `3px solid red`, }} />
                    <Typography sx={{ textAlign: "center" }}>sasda</Typography>
                </div>
                <div>
                    <Avatar src={'logo.svg'} alt="s" sx={{ marginInline: 10, padding: 4, borderRadius: 20, border: `3px solid red`, }} />
                    <Typography sx={{ textAlign: "center" }}>sasda</Typography>
                </div>
                <div>
                    <Avatar src={'logo.svg'} alt="s" sx={{ marginInline: 10, padding: 4, borderRadius: 20, border: `3px solid red`, }} />
                    <Typography sx={{ textAlign: "center" }}>sasda</Typography>
                </div>
                {/* {[...Array(5)].map((tab) => { */}
                {/* return (<Tab key={tab.id} label={tab.text} />) */}
                {/* } */}
                {/* )} */}
            </Tabs>
        </Stack>
    );
}

export default Stories;