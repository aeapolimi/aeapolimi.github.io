import React, { useRef } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';


import * as firebase from "firebase/app";

import { navigate } from "gatsby-plugin-intl"

import EditorMode from "../components/EditorMode"
import Note from "../components/Note"
import Appunti from "../components/Appunti"
import Tessera from "../components/Tessera"

function Benvenuto(props){
    var setNewsletter = () => {
        props.setNewsletter(!props.newsletter)
        var docref = firebase.firestore().collection("utenti").doc(firebase.auth().currentUser.uid);
        docref.update(
            {
                newsletter: !props.newsletter,
            }
        )
      };
    return (
        <>
            Ciao {props.utente}
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                style={{
                    marginTop: "20px"
                }}
            >
                {props.autorizzato ? <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item>
                            <Button variant="contained" onClick={() => props.setAppunti(!props.appunti)}>
                                appunti
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={() => props.setCard(!props.card)}>
                                card
                            </Button>
                        </Grid>
                        {
                            props.editor ? 
                            <><Grid item>
                            <Button variant="contained" onClick={() => props.setNote(!props.note)}>
                                note sui corsi
                            </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" onClick={() => props.setEditormode(!props.editormode)}>
                                    nuovo articolo
                                </Button>
                            </Grid></>
                            :
                            null
                        }
                    </Grid>
                </Grid> : null}
                <Grid item>
                <FormControlLabel
                    control={<Checkbox checked={props.newsletter} onChange={setNewsletter} name="Newsletter" />}
                    label="Newsletter"
                />
                </Grid>
            </Grid>
        </>
    )
}

function UserPage(props){
    const [appunti, setAppunti] = React.useState(false);
    const [note, setNote] = React.useState(false);
    const [card, setCard] = React.useState(false);
    const [editormode, setEditormode] = React.useState(false);
    var onLogout = () => {
        firebase.auth().signOut();
        props.setPrimogiro();
      };
    return(
        <div className="sfondo">
            <AppBar position="fixed" style={{backgroundColor: "transparent"}} elevation={0}>
                <Toolbar>
                    <IconButton aria-label="home" style={{color:"white"}} onClick = {() => navigate("/")}>
                        <ArrowBackIcon style={{fill: "white"}}/>
                    </IconButton>
                    <Button style={{color:"white"}} onClick = {() => navigate("/")}>Home</Button>
                    <div style={{flexGrow: 1}} />
                    <IconButton 
                    aria-label="home" 
                    style={{color:"white"}} 
                    onClick = {() => onLogout()}
                    >
                        <ExitToAppIcon style={{fill: "white"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="benvenuto">
                {appunti ? <Appunti setAppunti={setAppunti}/> : 
                note ? <Note setAppunti={setNote}/> :
                editormode ? <EditorMode setEditormode={setEditormode}/> :
                card ? <Tessera setCard={setCard} username={firebase.auth().currentUser.displayName} /> :
                <Benvenuto 
                appunti={appunti} 
                setAppunti={setAppunti} 
                note={note} 
                setNote={setNote}
                autorizzato={props.autorizzato} 
                setNewsletter={props.setNewsletter} 
                newsletter={props.newsletter}
                editor={props.editor}
                editormode={editormode}
                card={card}
                setCard={setCard}
                utente={firebase.auth().currentUser.displayName}
                setEditormode={setEditormode}/>
                        }
            </div>
        </div>
    )
}

export default UserPage;