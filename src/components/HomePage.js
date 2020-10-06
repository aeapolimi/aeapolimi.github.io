import React from 'react';
import './homePage.css';

import { makeStyles } from '@material-ui/core/styles';

import {isMobile} from 'react-device-detect';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import firebase from 'firebase';

import { navigate } from "gatsby"

import giulio from "../images/direttivo/giulio.jpeg"
import guido from "../images/direttivo/guido.jpeg"
import isabella from "../images/direttivo/isabella.jpeg"
import sofia from "../images/direttivo/sofia.jpeg"

const firebaseConfig = {
    apiKey: "AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",
    authDomain: "aeapolimiweb.firebaseapp.com",
    databaseURL: "https://aeapolimiweb.firebaseio.com",
    projectId: "aeapolimiweb",
    storageBucket: "aeapolimiweb.appspot.com",
    messagingSenderId: "252147138104",
    appId: "1:252147138104:web:cc2a953476b0b77f65b0cd"
  };
firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
    tableroot: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
    cardroot: {
        borderRadius: 30,
        maxWidth: 345,
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            minHeight: "70vh",
        },
        [theme.breakpoints.up('sm')]: {
        minHeight: 400,
        backgroundColor: "#efefef",
      },
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    mediaAvatar: {
        height: 0,
        paddingTop: '75%',
        borderRadius: '50%',
        margin: '28px'
    },
    info: {
      marginTop: "auto",
      position: "absolute",
      right: "45%",
      bottom: 0,
    },
    avatar: {
      backgroundColor: red[500],
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    focusHighlight: {},
    focusVisible: {},
    actionArea: {
        "&:hover $focusHighlight": {
          opacity: 0,
        },
        '&$focusVisible $focusHighlight': {
            opacity: 0,
          },
      },
    // cardTeam: {
    //     height: "100px"
    // }
  }));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function ArticoloCarousel(props){
    const classes = useStyles();
    const [leggi, setLeggi] = React.useState(false)
    var height="300"
    if (isMobile){
        height = "100vh";
    }

    const handleOpen = () => {
        setLeggi(true);
      };
    
      const handleClose = () => {
        setLeggi(false);
      };

    return (
        <>
        <Card key={props.titolo} className={classes.cardroot}>
                <CardHeader
                    // avatar={
                    // <Avatar aria-label="recipe" className={classes.avatar}>
                    //     A
                    // </Avatar>
                    // }
                    raised={true}
                    title={props.titolo}
                    subheader={props.data}
                />
                <CardMedia
                    className={classes.media}
                    image={require("../images/news/"+props.immagine)}
                    title="Automazione"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.sommario}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton className={classes.info} aria-label="expand row" size="small" onClick={handleOpen}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Modal
                open={leggi}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                onClose={handleClose}
                aria-labelledby="titolo_articolo"
                aria-describedby="contenuto_articolo"
            >
                <div style={{
                    top: `50%`,
                    left: `50%`,
                    transform: `translate(-50%, -50%)`,
                    maxWidth: "70vw"
                    }} 
                    className={classes.paper}
                >
                    <h2 id="titolo_articolo">{props.titolo}</h2>
                    <p id="contenuto_articolo">
                        <div dangerouslySetInnerHTML={{ __html: props.testo }} />
                    </p>
                </div>
            </Modal>
        </>
    );
}

function NewsSection(){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    if (articoli=="Caricamento..."){
        firebase.firestore().collection("news").get()
            .then(collec => {
                setArticoli(collec.docs)
            })
        }
    return(<Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={false}
        customTransition="all .5"
        // transitionDuration={1000} rompe il draggable
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        centerMode={true}
        >
            {(articoli=="Caricamento...") ? <div>Caricamento...</div> : 
            articoli.map(articolo => {
                return (
                    <div key={articolo.data().titolo}>
                        <ArticoloCarousel 
                        titolo={articolo.data().titolo} 
                        sommario={articolo.data().sommario}
                        data={articolo.data().data}
                        testo={articolo.data().testo}
                        immagine={articolo.data().immagine}
                        />
                    </div>
                )
            })}
    </Carousel>)
}

function CardDirettivo(props){
    const classes = useStyles();
    return (
        <Card className="cardTeam" elevation={0} style={{display: 'inline-block'}} >
            <CardActionArea onClick={() => window.open(props.linkedin)} classes={{
                root: classes.actionArea,
                focusVisible: classes.focusVisible,
                focusHighlight: classes.focusHighlight
                }}>
                <CardMedia
                className={classes.mediaAvatar}
                image={props.immagine}
                title={props.nome}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.nome}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.ruolo}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function HomePage (){
    const classes = useStyles();
    const [openBoard, setOpenBoard] = React.useState(true);
    const [openContenuti, setOpenContenuti] = React.useState(false);
    const [openAziende, setOpenAziende] = React.useState(false);
    const [openAccademico, setOpenAccademico] = React.useState(false);
    const [openInformatico, setOpenInformatico] = React.useState(false);
    const [openEventi, setOpenEventi] = React.useState(false);
    var width = "20%";
    var maxCardwidth = "50vw";
    if (isMobile){
        width = "60%";
        maxCardwidth = "100vw";
    }
    return(<>
            <div className="App">
                <AppBar position="absolute" style={{backgroundColor: "transparent"}} elevation={0}>
                    <Toolbar>
                        <Button style={{color:"white"}} onClick = {() => window.open("https://t.me/aeapolimi")}>Telegram</Button>
                        <div style={{flexGrow: 1}} />
                        <Button style={{color:"white"}} onClick = {() => navigate("/UserPage")}>Login</Button>
                    </Toolbar>
                </AppBar>
                {/* <iframe title="bg" id="bg" src='./robotrender.html' frameBorder="0"/> */}
                <iframe title="bg" id="bg" src='https://aeapolimi.github.io/robotrender.html' frameBorder="0"/> 
                <header className="App-header">
                    <div className="rectangle" key="titolo"><span className="titoloLogo">AEA</span></div>
                </header>
                <div className="freccia" style={{height:0, bottom:80, position:"relative"}}>
                    <Fab color="inherit" size="small" href="#news" aria-label="news">
                        <KeyboardArrowDownIcon style={{fill: "black"}}/>
                    </Fab>
                </div>
                <div title="news" id="news">
                    <div style={{margin:"30px"}}>
                        <Typography variant="h3" component="h4">
                            NEWS
                        </Typography>
                    </div>
                    <NewsSection/>
                    <div style={{minHeight:"20px"}} />
                </div>
                <div className="about" id="about">
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid
                        item
                        xs={12}
                        >
                            <Card className="cardAbout" style={{display: 'inline-block', maxWidth: {maxCardwidth}}}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Un punto di riferimento per il settore.
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Automation Engineering Association Polimi .
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        L’AEA, l’Automation Engineering Association, è un’associazione del Politecnico di Milano fondata nel *//* e riconosciuta dallo Stato Italiano. 
                                        È un’associazione no-profit, apartitica, apolitica e aconfessionale. 
                                        Costituita da studenti per gli studenti, lo scopo dell’associazione è quello di promuovere la figura dell’ingegnere 
                                        dell’automazione e di essere un punto di riferimento per tutti gli studenti del Politecnico di Milano. 
                                        La nostra mission è quella di offrire delle opportunità di crescita e di formazione, sia dal punto di vista accademico che da quello lavorativo.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick = {() => navigate("/UserPage")}>Associati</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className="team" id="team">
                    <div style={{margin:"30px"}}>
                        <Typography variant="h3" component="h4">
                            Chi siamo
                        </Typography>
                    </div>
                    <TableContainer component={Paper} elevation={0}>
                        <Table aria-label="collapsible table">
                            <TableBody>
                                <TableRow className={classes.tableroot}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpenBoard(!openBoard)}>
                                            {openBoard ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5">
                                            Board
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openBoard} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="center"
                                                    xs={12}
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={giulio} nome="Giulio Vaccari" ruolo="Presidente"/>
                                                    </Grid>
                                                <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/guido-sassaroli-778548169/" immagine={guido} nome="Guido Sassaroli" ruolo="Vicepresidente"/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="http://linkedin.com/in/isabella-luppi-006a9b177" immagine={isabella} nome="Isabella Luppi" ruolo="Segretario"/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={sofia} nome="Sofia Trombini" ruolo="Tesoriere"/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpenContenuti(!openContenuti)}>
                                            {openContenuti ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5">
                                            Team contenuti
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openContenuti} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="center"
                                                    xs
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/pietro-bosoni-4817291b8/" immagine={giulio} nome="Pietro Bosoni" ruolo="Consigliere"/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpenEventi(!openEventi)}>
                                            {openEventi ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5">
                                            Team eventi
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openEventi} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                    <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="center"
                                                    xs
                                                    >
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/gariboldicristian" immagine={giulio} nome="Cristian Gariboldi" ruolo="Consigliere"/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/filippo-tallon-9a9b331b8/" immagine={giulio} nome="Filippo Tallon" ruolo=""/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/elena-bastianelli-a58222197" immagine={giulio} nome="Elena Bastianelli" ruolo=""/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={giulio} nome="Giovanni Buzzao" ruolo=""/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpenAccademico(!openAccademico)}>
                                            {openAccademico ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5">
                                            Team accademico
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openAccademico} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="center"
                                                    xs={12}
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/pasqualecortese1994" immagine={giulio} nome="Pasquale Cortese" ruolo=""/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/roberto-pellerito-b8b99319a" immagine={giulio} nome="Roberto Pellerito" ruolo="Consigliere"/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpenAziende(!openAziende)}>
                                            {openAziende ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5">
                                            Team aziende
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openAziende} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="center"
                                                    xs={12}
                                                    spacing={2}
                                                >
                                                    <Grid
                                                    item
                                                    xs={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={giulio} nome="Pietro Dardano" ruolo=""/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/matteo-sacchetti-92b95218a" immagine={giulio} nome="Matteo Sacchetti" ruolo=""/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/leonardo-bertelli-20a34816a" immagine={giulio} nome="Leonardo Bertelli" ruolo=""/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/davide-zanatta-207b12174" immagine={giulio} nome="Davide Zanatta" ruolo="Consigliere"/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpenInformatico(!openInformatico)}>
                                            {openInformatico ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5">
                                            Team informatico
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openInformatico} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="center"
                                                    xs={12}
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xs
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={giulio} nome="Andrea Archetti" ruolo="Consigliere"/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
        </div>
        <div style={{height:"40px"}} />
        <AppBar position="relative" style={{backgroundColor: "black"}} className={classes.appBar} elevation={0}>
                    <Toolbar>
                        <Typography variant="subtitle2" component="subtitle2">
                            Copyright AEA 2020
                        </Typography>
                        <div style={{flexGrow: 1}} />
                    </Toolbar>
                </AppBar>
        </>
    )
}

export default HomePage;