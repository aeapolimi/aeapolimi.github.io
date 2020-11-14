import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from "gatsby-plugin-intl"

import IconeSocial from "../components/IconeSocial"

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "black",
        position: "relative"
    },
}))
function Footer(){

    const classes = useStyles();
    return(
        <AppBar className={classes.appBar} elevation={0} key="fintoFooter">
            <Toolbar key="footerToolbar">
                <Typography variant="subtitle2">
                    Copyright AEA 2020
                </Typography>
                <div style={{flexGrow: 1}} />
                <IconeSocial/>
                <div style={{flexGrow: 1}} />
                <Button style={{color:"white"}} component={Link} to="/PrivacyPolicy" size="small">Privacy policy</Button>
            </Toolbar>
        </AppBar>
        )
}

export default Footer;