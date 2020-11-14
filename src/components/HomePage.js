import React from 'react';
import './homePage.css';

import { makeStyles } from '@material-ui/core/styles';

import {isMobile, isSafari, isMobileSafari, isAndroid, isFirefox, browserVersion} from 'react-device-detect';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { red } from '@material-ui/core/colors';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuIcon from '@material-ui/icons/Menu';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

import ElementiDrawer from "../components/ElementiDrawer"
import Footer from "../components/Footer"
import IconeSocial from "../components/IconeSocial"

import RobotVideo from "../../static/robot.mp4"

import 'fontsource-roboto';

const isSaf = isMobileSafari || isSafari;

const firebaseConfig = {
    apiKey: "AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",
    authDomain: "aeapolimiweb.firebaseapp.com",
    databaseURL: "https://aeapolimiweb.firebaseio.com",
    projectId: "aeapolimiweb",
    storageBucket: "aeapolimiweb.appspot.com",
    messagingSenderId: "252147138104",
    appId: "1:252147138104:web:cc2a953476b0b77f65b0cd",
    measurementId: "G-0D5Z9JD5XH"
  };

if (typeof window!== "undefined" && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    actionArea: {
        "&:hover $focusHighlight": {
          opacity: 0,
        },
        '&$focusVisible $focusHighlight': {
            opacity: 0,
          },
      },
    avatar: {
        backgroundColor: red[500],
    },
    cardroot: {
        // borderRadius: 30,
        maxWidth: 345,
        position: "relative",
        borderColor: 'black',
        [theme.breakpoints.down('sm')]: {
            minHeight: "70vh",
            marginLeft: "10px",
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: 400,
            backgroundColor: "#efefef",
      },
    },
    cardheader: {
        marginBottom:0
    },
    cardabout: {
        display: 'inline-block',
        backgroundColor: "#fafafa",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100vw",
            marginTop: "20vh"
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: "50vw",
            marginTop: "40vh"
      },
    },
    info: {
      marginTop: "auto",
      position: "absolute",
      right: "45%",
      bottom: 0,
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
    menuButton: {
        marginRight: theme.spacing(2),
        backgroundColor: "black",
        "&:hover": {
        backgroundColor: "black"
        }
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    focusHighlight: {},
    focusVisible: {},
    tableroot: {
    '& > *': {
        borderBottom: 'unset',
    },
    },
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
    return (
        <>
        <Card key={props.titolo} variant="outlined" className={classes.cardroot}>
                <CardMedia
                    className={classes.media}
                    image={props.immagine.includes("http") ? props.immagine : require("../images/news/"+props.immagine)}
                    title={props.titolo}
                />
                <CardHeader
                    className={classes.cardheader}
                    // avatar={
                    // <Avatar aria-label="recipe" className={classes.avatar}>
                    //     A
                    // </Avatar>
                    // }
                    title={props.titolo}
                    subheader={props.data.toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" align="center">
                        {props.sommario}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton style={{color:"black"}} className={classes.info} aria-label="expand row" size="small" component={Link} to={'/Articolo/?'+props.codice}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
}

function NewsSection(){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    if (articoli==="Caricamento..."){
        firebase.firestore().collection("news").orderBy('data', 'desc').limit(10).get()
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
            {(articoli==="Caricamento...") ? <div>Loading...</div> : 
            articoli.map(articolo => {
                return (
                    <div key={articolo.data().titolo}>
                        <ArticoloCarousel 
                        titolo={articolo.data().titolo} 
                        sommario={articolo.data().sommario}
                        data={articolo.data().data.toDate()}
                        immagine={articolo.data().immagine}
                        codice={articolo.id}
                        />
                    </div>
                )
            })}
    </Carousel>)
}

function CardDirettivo(props){
    const classes = useStyles();
    return (
        <Card className="cardTeam" elevation={0} style={{display: 'block', height: "80%", width: "80%", margin: "0 auto", backgroundColor:"transparent"}} >
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
                <Typography gutterBottom variant="h5" component="h2" align="center">
                    {props.nome}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" component="p" style={{color: props.invisibile ? "transparent" : undefined }}>
                    {props.ruolo}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function HomePage (){
    // HOOK
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [openBoard, setOpenBoard] = React.useState(true);
    const [openContenuti, setOpenContenuti] = React.useState(false);
    const [openAziende, setOpenAziende] = React.useState(false);
    const [openAccademico, setOpenAccademico] = React.useState(false);
    const [openInformatico, setOpenInformatico] = React.useState(false);
    const [openEventi, setOpenEventi] = React.useState(false);
    const intl = useIntl();
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };
    return(<>
            <div className="App">
                <SwipeableDrawer
                    anchor="left"
                    variant="persistent"
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <ElementiDrawer home={true}/>
                </SwipeableDrawer>
            <ClickAwayListener onClickAway={toggleDrawer(false)}>
                <div className="areadrawer">
                <AppBar position="absolute" style={{backgroundColor: "transparent"}} elevation={0}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpenDrawer(!openDrawer)}>
                            <MenuIcon/>
                        </IconButton>
                        <div style={{flexGrow: 1}} />
                        <IconeSocial/>
                    </Toolbar>
                </AppBar>
                </div>
            </ClickAwayListener>
                {/* Il render viene caricato solo su firefox non mobile. */}
                {((isFirefox && !isMobile && !isAndroid) || (isMobileSafari && browserVersion >= 14)) ? 
                    <iframe title="bg" id="bg" src='./robotrender.html' frameBorder="0" loading="lazy"/> :
                    <video title="videorobot" id="videorobot" playsinline loop muted autoPlay poster={require("../images/sfondorobot.png")}>
                        <source src={RobotVideo} type="video/mp4"/>
                    </video>                    
                }

                <header className="App-header">
                    <div className="rectangle" key="titolo"><span className="titoloLogo"><img alt="logo" src={!isSaf ? require("../images/AEAtondo_grigio.webp") : require("../images/AEAtondo_grigio.png")}/></span></div>
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
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                        item
                        xs
                        >
                            <Card className={classes.cardabout}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        <FormattedMessage id="about.pretitolo" />
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Automation Engineering Association Polimi
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        <FormattedMessage id="about.testo"/>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} to="/UserPage" size="small"><FormattedMessage id="about.joinus"/></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className="team" id="team">
                    <div style={{margin:"30px"}}>
                        <Typography variant="h3" component="h4">
                            Team
                        </Typography>
                    </div>
                    <TableContainer component={Paper} elevation={0} style={{overflowX: "visible", backgroundColor:"transparent"}}>
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
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={!isSaf ? require("../images/direttivo/giulio.webp") : require("../images/direttivo/giulio.jpeg")} nome="Giulio Vaccari" ruolo="President" invisibile={false}/>
                                                    </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/guido-sassaroli-778548169/" immagine={!isSaf ? require("../images/direttivo/guido.webp") : require("../images/direttivo/guido.jpeg")} nome="Guido Sassaroli" ruolo="Vicepresident" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://linkedin.com/in/isabella-luppi-006a9b177" immagine={!isSaf ? require("../images/direttivo/isabella.webp") : require("../images/direttivo/isabella.jpeg")} nome="Isabella Luppi" ruolo="Secretary" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/sofiatrombini" immagine={!isSaf ? require("../images/direttivo/sofia.webp") : require("../images/direttivo/sofia.jpeg")} nome="Sofia Trombini" ruolo="Treasurer" invisibile={false}/>
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
                                            Academic Relations
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
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/roberto-pellerito-b8b99319a" immagine={!isSaf ? require("../images/direttivo/roberto.webp") : require("../images/direttivo/roberto.jpeg")} nome="Roberto Pellerito" ruolo="Team leader" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/pasqualecortese1994" immagine={!isSaf ? require("../images/direttivo/pasquale.webp") : require("../images/direttivo/pasquale.jpeg")} nome="Pasquale Cortese" ruolo="Co-founder" invisibile={true}/>
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
                                            Company Relations
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
                                                    spacing={2}
                                                >
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/davide-zanatta-207b12174" immagine={!isSaf ? require("../images/direttivo/davide.webp") : require("../images/direttivo/davide.jpeg")} nome="Davide Zanatta" ruolo="Team leader" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/leonardo-bertelli-20a34816a" immagine={!isSaf ? require("../images/direttivo/leonardo.webp") : require("../images/direttivo/leonardo.jpeg")} nome="Leonardo Bertelli" ruolo="Co-founder" invisibile={true}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={!isSaf ? require("../images/direttivo/pit.webp") : require("../images/direttivo/pit.jpeg")} nome="Pietro Dardano" ruolo="Co-founder" invisibile={true}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/matteo-sacchetti-92b95218a" immagine={!isSaf ? require("../images/direttivo/matteo.webp") : require("../images/direttivo/matteo.jpeg")} nome="Matteo Sacchetti" ruolo="Co-founder" invisibile={true}/>
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
                                            Contents
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
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/pietro-bosoni-4817291b8/" immagine={!isSaf ? require("../images/direttivo/pietro.webp") : require("../images/direttivo/pietro.jpeg")} nome="Pietro Bosoni" ruolo="Team leader" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giovanni-ploner-703b25187/" immagine={!isSaf ? require("../images/direttivo/giovannip.webp") : require("../images/direttivo/giovannip.jpeg")} nome="Giovanni Ploner" ruolo="Co-founder" invisibile={true}/>
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
                                            DevOps
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
                                                    spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xl={3}
                                                    sm={6}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giovanni-cherubini-1690201a7/" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Giovanni Cherubini" ruolo="Team leader" invisibile={false}/>
                                                    </Grid>

                                                    <Grid
                                                    item
                                                    xl={3}
                                                    sm={6}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Andrea Archetti" ruolo="Co-Founder" invisibile={true}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xl={3}
                                                    sm={6}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Gabriele Liuzzo" ruolo="Co-Founder" invisibile={true}/>
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
                                            Events
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
                                                    spacing={3}
                                                    >
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/gariboldicristian" immagine={!isSaf ? require("../images/direttivo/cristian.webp") : require("../images/direttivo/cristian.jpeg")} nome="Cristian Gariboldi" ruolo="Team leader" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/filippo-tallon-9a9b331b8/" immagine={!isSaf ? require("../images/direttivo/filippo.webp") : require("../images/direttivo/filippo.jpeg")} nome="Filippo Tallon" ruolo="Co-founder" invisibile={true}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/elena-bastianelli-a58222197" immagine={!isSaf ? require("../images/direttivo/elena.webp") : require("../images/direttivo/elena.jpeg")} nome="Elena Bastianelli" ruolo="Co-founder" invisibile={true}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    md={6}
                                                    xl={3}
                                                    xs={12}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Giovanni Buzzao" ruolo="Co-founder" invisibile={true}/>
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
        <div className="contatti">
            Info: segreteria@aeapolimi.it
        </div>
        <div style={{height:"50px"}} />
        <Footer />
        </>
    )
}

export default HomePage;