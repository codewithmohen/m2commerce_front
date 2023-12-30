import { Box, Button, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props: any) {
    return (
        <Box>
            <Paper component="form" sx={{ background: 'grey', marginRight: '1vw' }}>
                <InputBase sx={{ width: '40vw', pr: 2, direction: "rtl", background: "grey" }} placeholder='جستجو کنید'>
                </InputBase>
                <IconButton
                    type='button'
                    sx={{
                        borderRadius: 0,
                    }}
                    aria-label='search'
                >
                    <SearchIcon />
                </IconButton>
            </Paper>

        </Box>
    );
}

export default SearchBox;