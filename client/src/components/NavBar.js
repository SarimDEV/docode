import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from "react-router-dom";

import logo from '../imgs/logo.png'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    logo: {
        marginRight: '10px',
    },
}));

export default function NavBar() {
    const classes = useStyles();
    return (
            <AppBar position="static">
                <Toolbar>
                    <img className={classes.logo} src={logo} alt="icon" />
                    <Typography variant="h6" className={classes.title}>
                        DoCode
                    </Typography>
                    <Button component={ Link } to="/signin" color="inherit">Sign In</Button>
                </Toolbar>
            </AppBar>
    )
}