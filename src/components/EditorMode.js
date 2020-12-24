import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

import ImageIcon from '@material-ui/icons/Image';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';

import { FormattedMessage } from "gatsby-plugin-intl"

import firebase from 'firebase/app';
import 'firebase/firestore';


const useStyles = makeStyles((theme) => ({
    titolo: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30vw',
          },
        },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30vw',
      },
    },
    testoArticolo: {
        textAlign:"justify",
        margin:"0 auto",
        fontSize: "1rem",
        [theme.breakpoints.up('sm')]: {
          maxWidth:"55vw",
        },
      },
  }));

function BarraStrumenti(props){
    return (
        <>
            <IconButton size="small" aria-label="bold" color="inherit" onClick={() => props.setTesto(props.testo + "<b></b>")}>
                <FormatBoldIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" aria-label="italic" color="inherit" onClick={() => props.setTesto(props.testo + "<i></i>")}>
                <FormatItalicIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" aria-label="new line" color="inherit" onClick={() => props.setTesto(props.testo + "<br/>")}>
                br
            </IconButton>
            <IconButton size="small" aria-label="img" color="inherit" onClick={() => props.setTesto(props.testo + ' <img src= "INSERIRE URL" tag="DESCRIZIONE IMMAGINE"/>')}>
                <ImageIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" aria-label="yt" color="inherit" onClick={() => props.setTesto(props.testo + ' <div style="position:relative;padding-bottom:56.25%"}}> <iframe style="position:absolute" width="100%" height="100%" src="URL YOUTUBE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></div>')}>
                <YouTubeIcon fontSize="small" />
            </IconButton>
        </>
    )
}

function EditorMode(props){
    const classes = useStyles();
    const [immagine, setImmagine] = React.useState("https://raw.githubusercontent.com/aeapolimi/aeapolimi.github.io/master/src/images/news/robot.jpg");
    const [tag, setTags] = React.useState(['Tag1', 'tag2']);
    const [autore, setAutore] = React.useState('Autore');
    const [open, setOpen] = React.useState(false);
    const [sommario, setSommario] = React.useState('Summary');
    const [sommario_it, setSommario_it] = React.useState('Sommario');
    const [testo_it, setTesto_it] = React.useState('Testo');
    const [testo, setTesto] = React.useState('Text');
    const [titolo, setTitolo] = React.useState('Title');
    const [titolo_it, setTitolo_it] = React.useState('Titolo');
    const data = new Date();

    const handleClose = (event, reason) => {
        setOpen(false)
    }

    const salva = () => {
        var docref = firebase.firestore().collection("news").doc(titolo.replace(/\ /g, "_").replace(/\;/g, "_").replace(/\:/g, "").replace(/\,/g, "").replace(/\./g, "").toLowerCase());
        docref.set(
                {
                    autore : autore,
                    data : data,
                    immagine: immagine,
                    sommario: sommario,
                    sommario_it: sommario_it,
                    tag: tag,
                    testo: testo,
                    testo_it: testo_it,
                    titolo: titolo,
                    titolo_it: titolo_it
                }
            )
        .catch(function(error) {
            console.log("Error getting document:", error);
        });
        setOpen(true)
    }

    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setEditormode(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                EditorMode
            </Typography>
            <div style={{height: "20px"}} />
            <form className={classes.titolo} noValidate autoComplete="off">
                <TextField 
                id="standard-basic" 
                label="Immagine"
                value={immagine}
                onChange={(event) => setImmagine(event.target.value)}
                multiline />
            </form>
            <form className={classes.titolo} noValidate autoComplete="off">
                <TextField 
                id="standard-basic" 
                label="Tags"
                value={tag.join()}
                onChange={(event) => setTags(event.target.value.replace(" ", ",").split(","))}
                multiline />
            </form>
            <form className={classes.titolo} noValidate autoComplete="off">
                <TextField 
                id="standard-basic" 
                label="Autore"
                value={autore}
                onChange={(event) => setAutore(event.target.value)}
                multiline />
            </form>
            <form className={classes.titolo} noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    label="Titolo in inglese"
                    value={titolo}
                    onChange={(event) => setTitolo(event.target.value)}
                    multiline
                    />
                <TextField 
                    id="standard-basic" 
                    label="Titolo in italiano"
                    value={titolo_it}
                    onChange={(event) => setTitolo_it(event.target.value)}
                    multiline
                />
            </form>
            <form className={classes.titolo} noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    label="Sommario in inglese"
                    value={sommario}
                    onChange={(event) => setSommario(event.target.value)}
                    multiline
                />
                <TextField 
                id="standard-basic" 
                label="Sommario in italiano"
                value={sommario_it}
                onChange={(event) => setSommario_it(event.target.value)}
                multiline />
            </form>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={3}
                style={{
                    marginTop: "20px"
                }}
            >
                <Grid item>
                    <BarraStrumenti testo={testo} setTesto={setTesto}/>
                </Grid>
                <Grid item>
                    <BarraStrumenti testo={testo_it} setTesto={setTesto_it}/>
                </Grid>
            </Grid>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    label="Articolo in inglese"
                    value={testo}
                    onChange={(event) => setTesto(event.target.value)}
                    multiline
                />
                <TextField 
                    id="standard-basic" 
                    label="Articolo in italiano"
                    value={testo_it}
                    onChange={(event) => setTesto_it(event.target.value)}
                    multiline
                    />
            </form>
            <Button variant="contained" onClick={() => salva()}>
                Pubblica
            </Button>
            <div className="contenuto">
                <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
                <Typography variant="overline" color="textSecondary" gutterBottom>
                    TAG:
                    {
                        tag.join(" ")
                    }
                    </Typography>
                <Typography variant="h6" align="center">
                    {data.toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    <FormattedMessage id="insiders.by" /> {autore}
                </Typography>
                <Typography variant="h1" align="center">
                    {titolo}
                </Typography>
                <Typography variant="subtitle1" align="center">
                    {sommario}
                </Typography>
                <Divider style={{marginTop: "20px", marginBottom: "40px"}}/>
                <Typography variant="p">
                    <div className={classes.testoArticolo} key={titolo} dangerouslySetInnerHTML={{ __html: testo }}/>
                </Typography>
                <div style={{height:"40px"}} />
            </div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Pubblicato"
                action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        Fatto
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    )
}

export default EditorMode
