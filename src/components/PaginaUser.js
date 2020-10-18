import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

import * as firebase from "firebase/app";

import { navigate } from "gatsby"

function Appunti(props){
    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setAppunti(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                Appunti
            </Typography>
            <div style={{height: "20px"}} />
            <Button variant="contained" href="https://drive.google.com/file/d/1rrlZdiWcQZQrZKrDdXGSSXwQ_zVjZ2dz/view" target="_blank">
                Fondamenti di automatica
            </Button>
        </div>
    )
}

function Benvenuto(props){
    return (
        <>
            Ciao {props.utente}
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
                style={{
                    marginTop: "20px"
                }}
            >
                <Grid item>
                    <Button variant="contained" onClick={() => props.setAppunti(!props.appunti)}>
                        appunti
                    </Button>
                </Grid>
                <Grid item>
                <Button variant="contained">
                        note sui corsi
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

function UserPage(props){
    const [appunti, setAppunti] = React.useState(false);
    return(
        <div className="sfondo">
            <AppBar position="fixed" style={{backgroundColor: "transparent"}} elevation={0}>
                <Toolbar>
                    <IconButton aria-label="home" style={{color:"white"}} onClick = {() => navigate("/")}>
                        <ArrowBackIcon style={{fill: "white"}}/>
                    </IconButton>
                    <Button style={{color:"white"}} onClick = {() => navigate("/")}>Home</Button>
                    <div style={{flexGrow: 1}} />
                    <IconButton aria-label="home" style={{color:"white"}} onClick = {() => firebase.auth().signOut()}>
                        <ExitToAppIcon style={{fill: "white"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="benvenuto">
                {appunti ? <Appunti setAppunti={setAppunti}/> : 
                <Benvenuto appunti={appunti} setAppunti={setAppunti} autorizzato={props.autorizzato}/>
                        }
            </div>
        </div>
    )
}

export default UserPage;