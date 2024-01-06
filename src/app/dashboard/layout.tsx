'use client';

import { AccountCircle } from '@mui/icons-material';
import { AppBar, Box, Container, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from '@mui/material';
import React, { Children } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event: any) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <html>
            <body>
                <Box sx={{ flexGrow: 1 }}>
                    {/* <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={auth}
                                    onChange={handleChange}
                                    aria-label="login switch"
                                />
                            }
                            label={auth ? 'Logout' : 'Login'}
                        />
                    </FormGroup> */}
                    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                M2Commerce
                            </Typography>
                            {auth && (
                                <div>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean('')}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                </Box>
                <>
                    {children}
                </>
            </body>
        </html>
    );
}
