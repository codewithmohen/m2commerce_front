'use client';
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import AppBar from '@mui/material/AppBar';
import logo from './../_assets/m2.png';
import useSecure from '../_hooks/useSecure';
import Loading from '../_components/loading';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import { AccountCircle } from '@mui/icons-material';
import { signOut } from '../(auth)/_reducer/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import { IAuthState } from '../(auth)/_reducer/interfaces';
import { AppDispatch } from '../store';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid';
import M2Breadcrumbs from './_components/M2Breadcrumbs';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from '@mui/material';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        }),
        position: 'relative',
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    // export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isSafe, setSafe] = React.useState(false);
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    const dispatch: AppDispatch = useDispatch();
    const { push } = useRouter();
    useSecure(setSafe);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        dispatch(signOut());
        push('/auth/sign-in');
    };
    const handleAuthSetting = () => {
        push('/admin/auth/setting');
    };

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event: any, index: any) => {
        setSelectedIndex(index);
    };


    return (
        <>
            {isSafe &&
                <>
                    <Box sx={{ display: 'flex' }}>
                        <AppBar position="fixed" theme={theme} open={open} sx={{ bgcolor: 'secondary.main' }}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerOpen}
                                    sx={{ ...(open && { display: 'none' }), marginRight: 4 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Link href="/admin">
                                    <Box sx={{ margin: 1 }}>
                                        <img src={logo.src} style={{ height: 36, margin: 1 }} />
                                    </Box>
                                </Link>
                                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                                    Admin Dashboard
                                </Typography>
                                <IconButton
                                    size="large"
                                    color="inherit"
                                    href='/'
                                >
                                    <LanguageOutlinedIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    color="inherit"
                                    href='/admin/auth'
                                >
                                    <AccountCircle />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    onClick={(event) => handleSignOut()}
                                    color="inherit"
                                >
                                    <LogoutTwoToneIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Main theme={theme} open={open}>
                            <DrawerHeader />
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <M2Breadcrumbs />
                                </Grid>
                                {children}
                            </Grid>
                        </Main>
                        <Drawer
                            sx={{

                                // width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                },
                            }}
                            variant="persistent"
                            anchor="left"
                            open={open}
                        >
                            <DrawerHeader sx={{ justifyContent: 'flex-end' }}>

                                <IconButton onClick={handleDrawerClose} >
                                    <ArrowCircleLeftTwoToneIcon />
                                    {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                                </IconButton>
                            </DrawerHeader>
                            {/* <Divider /> */}
                            <List>
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    href='/admin/auth'
                                // onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <SupervisedUserCircleTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Auth" />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <StorefrontTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Shop" />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <SettingsTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Config" />
                                </ListItemButton>
                            </List>

                        </Drawer>
                    </Box>
                </>
            }
            {!isSafe &&
                <Loading />
            }
        </>
    );
}
