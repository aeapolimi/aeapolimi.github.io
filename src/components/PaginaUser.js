import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as firebase from "firebase/app";

import { navigate } from "gatsby"

function UserPage(props){
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
                        <Button variant="contained">
                            appunti
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button variant="contained">
                            note sui corsi
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default UserPage;