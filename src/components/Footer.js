import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CookieConsent from "react-cookie-consent";

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from "gatsby-plugin-intl"

import IconeSocial from "../components/IconeSocial"

const useStyles = makeStyles(() => ({
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
        <><div className={classes.appBar} elevation={0} key="fintoFooter">
            <Toolbar key="footerToolbar" style={{backgroundColor: "black"}}>
                <Typography variant="subtitle2" style={{color:"white"}}>
                    Copyright AEA 2020
                </Typography>
                <div style={{flexGrow: 1}} />
                <IconeSocial/>
                <div style={{flexGrow: 1}} />
                <Button style={{color:"white"}} component={Link} to="/privacypolicy" size="small">Privacy policy</Button>
            </Toolbar>
        </div>
        <CookieConsent
            location="bottom"
            buttonText="Ok"
            buttonStyle={{ backgroundColor: "#ef6c00", fontSize: "13px" }}
            cookieName="gatsby-gdpr-google-analytics">
            AEA uses cookies to login. <Link to="/privacypolicy"><b>More</b></Link>
        </CookieConsent>
        </>
        )
}

export default Footer;