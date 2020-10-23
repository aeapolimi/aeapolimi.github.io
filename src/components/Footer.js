import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "black",
        position: "relative"
    },
}))

function Footer(props){
    const classes = useStyles();
    return(
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
                <Typography variant="subtitle2" component="subtitle2">
                    Copyright AEA 2020
                </Typography>
                <div style={{flexGrow: 1}} />
                
                <IconButton href = "https://www.instagram.com/aeapolimi/" rel="noopener" target="_blank"><InstagramIcon style={{fill: "white"}}/></IconButton>
                <IconButton href = "https://www.linkedin.com/company/aeapolimi" rel="noopener" target="_blank"><LinkedInIcon style={{fill: "white"}}/></IconButton>
                <IconButton href = "https://t.me/aeapolimi" rel="noopener" target="_blank"><TelegramIcon style={{fill: "white"}}/></IconButton>

                <div style={{flexGrow: 1}} />
                <Button style={{color:"white"}} size="small" onClick = {() => window.open("https://aeapolimi.github.io/privacypolicy.html")}>Privacy policy</Button>
            </Toolbar>
        </AppBar>
        )
}

export default Footer;