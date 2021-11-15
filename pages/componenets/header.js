import React, { useState, Fragment, useContext, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "next/link";
import axios from "axios";
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Context } from "../context";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList'
import Menu from '@mui/material/Menu';
import { makeStyles, withStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { useRouter, userRouter } from "next/router";



const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const useStyles = makeStyles((theme) => ({

    menu: {
        "& .MuiPaper-root": {
            //   backgroundColor: "lightblue"
            background: "linear-gradient(90.09deg, #1E1D1D 1.02%, rgb(42 42 42 / 91%) 59.71%)",
            color: 'white',
        }
    },
    orange: {
        // color: theme.palette.getContrastText(deepOrange[500]),
        // backgroundColor: deepOrange[500],
        background: "linear-gradient(90.09deg, #1E1D1D 1.02%, rgb(42 42 42 / 91%) 59.71%)",
        cursor:"pointer",
    },
}));

export default function Header() {

    //dropdown

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const router = useRouter();

    const classes = useStyles();


    const { state, dispatch } = useContext(Context);
    const { user } = state;

    // let router = useNavigate();

    const logout = async () => {
        dispatch({ type: "LOGOUT" });
        window.localStorage.removeItem("user");
        const { data } = await axios.get(`/api/logout`);
        toast.dark(data.message);
        router.push("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mark Management System
                    </Typography>

                    {user !== null && (

                        <div>
                            <div className={classes.root} onClick={handleClick} >
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt={user && user.name} src="../public/images.jpg" className={classes.orange} />
                                </StyledBadge>

                            </div>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}> <Button onClick={logout} color="inherit">
                                    Logout
                                </Button></MenuItem>

                            </Menu>

                        </div>
                    )
                    }


                    {
                        user === null && (
                            <>
                                <Link href="/" >
                                    <a style={{ textDecoration: "none", color: "white" }}>
                                        <Button color="inherit">StaffLogin</Button>
                                    </a>
                                </Link>

                                <Link href="/studentLogin" >
                                    <a style={{ textDecoration: "none", color: "white" }}>
                                        <Button color="inherit">StudentLogin</Button>
                                    </a>
                                </Link>
                            </>
                        )
                    }




                </Toolbar>
            </AppBar>
        </Box>
    );
}
