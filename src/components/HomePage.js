import React from 'react';
import './homePage.css';

import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

import { isMobile, isSafari, isMobileSafari } from 'react-device-detect';

import { makeStyles } from '@material-ui/core/styles';

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
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import RobotVideo from "../../static/robot.mp4"

import 'fontsource-roboto';

import loadable from '@loadable/component';
const ElementiDrawer = loadable(() => import(`../components/ElementiDrawer`));
const Footer = loadable(() => import(`../components/Footer`));
const IconeSocial = loadable(() => import(`../components/IconeSocial`));

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
    autore:{
        height: 20,
        marginTop: 10,
        marginBottom: 0,
        padding: 0
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
            minHeight: 600,
            backgroundColor: "#efefef",
      },
    },
    cardheader: {
        marginTop: 0,
        padding: 0,
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
      paddingTop: '100%', // 16:9
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
    team: {
        backgroundColor: "transparent",
        width: "95%",
        [theme.breakpoints.up('sm')]: {
            width: "80%"
        },
        [theme.breakpoints.up('md')]: {
            width: "60%"
        },
        margin: "0 auto"
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
    const intl = useIntl();
    return (
        <>
        <Card key={props.titolo} variant="outlined" className={classes.cardroot}>
                <CardMedia
                    className={classes.media}
                    image={props.immagine.includes("http") ? props.immagine : require("../images/news/"+props.immagine)}
                    title={props.titolo}
                />
                <CardHeader
                    className={classes.autore}
                    subheader={props.autore}
                    subheaderTypographyProps={{variant:"overline"}}
                />
                <CardHeader
                    className={classes.cardheader}
                    title={props.titolo}
                    subheader={props.data.toLocaleString(intl.locale, { month: "long", day: "numeric", year: "numeric" })}
                    subheaderTypographyProps={{variant:"overline"}}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" align="center">
                        {props.sommario}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton style={{color:"black"}} className={classes.info} aria-label="expand row" size="small" component={Link} to={'/articolo/?'+props.codice}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
}

function NewsSection(){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    const intl = useIntl();
    var it = intl.locale === "it";
    if (articoli==="Caricamento..."){
        firebase.firestore().collection("news").where("in_home", "==", true).orderBy('data', 'desc').limit(10).get()
            .then(collec => {
                setArticoli(collec.docs)
            })
        }
    return(<Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
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
        sliderClass="custom-react-carousel-track"
        centerMode={true}
        >
            {(articoli==="Caricamento...") ? <div>Loading...</div> : 
            articoli.map(articolo => {
                return (
                    <div key={articolo.data().titolo}>
                        <ArticoloCarousel 
                        titolo={it ? articolo.data().titolo_it: articolo.data().titolo} 
                        sommario={it ? articolo.data().sommario_it : articolo.data().sommario}
                        data={articolo.data().data.toDate()}
                        immagine={articolo.data().immagine}
                        codice={articolo.id}
                        autore={articolo.data().autore}
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
                <IconButton style={{width:"100%", display:"flex", justifyContent: "center", marginTop:"-30px" }}><LinkedInIcon style={{fill: "#0072b1"}}/></IconButton>
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
    const [openBoard, setOpenBoard] = React.useState(!isMobile);
    const [openChairs, setOpenChairs] = React.useState(!isMobile);
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
                {/* {((isFirefox && !isMobile && !isAndroid) || (isMobileSafari && browserVersion >= 14)) ? 
                    <iframe title="bg" id="bg" src='https://www.aeapolimi.it/robotrender.html' frameBorder="0" loading="lazy"/> : */}
                    <video title="videorobot" id="videorobot" playsinline loop muted autoPlay poster={!isSaf ? require("../images/sfondorobot.webp") : require("../images/sfondorobot.png")}>
                        <source src={RobotVideo} type="video/mp4"/>
                    </video>                    
                {/* } */}

                <header className="App-header">
                    <div className="rectangle" key="titolo">
                        <span className="titoloLogo">
                            {/* Safari non riconosce */}
                            {/* <img alt="logo" src={!isSaf ? require("../images/AEAtondo_grigio.webp") : require("../images/AEAtondo_grigio.png")}/> */}
                            <img alt="logo" src={require("../images/AEAtondo_grigio.png")}/>
                        </span>
                    </div>
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
                    <div style={{minHeight:"10px"}} />
                </div>
                <div title="about" className="about" id="about">
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
                                    <Button component={Link} style={{color:"black"}} to="/associates" size="small"><FormattedMessage id="about.joinus"/></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.team} id="team">
                    <div style={{margin:"30px"}}>
                        <Typography variant="h3" component="h3">
                            Board & Chairs
                        </Typography>
                    </div>
                    <TableContainer component={Paper} elevation={0} style={{overflowX: "visible", backgroundColor:"transparent"}}>
                        <Table aria-label="collapsible table">
                            <TableBody>
                                <TableRow className={classes.tableroot} onClick={() => setOpenBoard(!openBoard)}>
                                    {isMobile ?
                                        <TableCell>
                                        <IconButton aria-label="expand row" size="small">
                                            {openBoard ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell> : null}
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5" align={isMobile ? "left" : "center"}>
                                            Board
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
                                        <Collapse in={openBoard} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="space-evenly"
                                                    alignItems="center"
                                                    // spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xs={6}
                                                    md={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={!isSaf ? require("../images/direttivo/giulio_vaccari.webp") : require("../images/direttivo/giulio_vaccari.jpeg")} nome={"Giulio Vaccari"} ruolo="President" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs={6}
                                                    md={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/guido-sassaroli-778548169/" immagine={!isSaf ? require("../images/direttivo/guido_sassaroli.webp") : require("../images/direttivo/guido_sassaroli.jpeg")} nome="Guido Sassaroli" ruolo="Vicepresident" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/giovanni-ploner-703b25187/" immagine={!isSaf ? require("../images/direttivo/giovanni_ploner.webp") : require("../images/direttivo/giovanni_ploner.jpeg")} nome="Giovanni Ploner" ruolo="Secretary" invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xs={6}
                                                    xl={3}
                                                    >
                                                        <CardDirettivo linkedin="https://www.linkedin.com/in/sofiatrombini" immagine={!isSaf ? require("../images/direttivo/sofia_trombini.webp") : require("../images/direttivo/sofia_trombini.jpeg")} nome="Sofia Trombini" ruolo="Treasurer" invisibile={false}/>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot} onClick={() => setOpenChairs(!openChairs)}>
                                    {isMobile ?
                                        <TableCell>
                                            <IconButton aria-label="expand row" size="small">
                                                {openChairs ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </TableCell> : null}
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h4" component="h5" align={isMobile ? "left" : "center"}>
                                            Chairs
                                        </Typography>       
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableroot}>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={openChairs} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="space-evenly"
                                                    alignItems="center"
                                                    // spacing={3}
                                                >
                                                    <Grid
                                                    item
                                                    xl={2}
                                                    xs={6}
                                                    >
                                                        <CardDirettivo 
                                                            linkedin="https://www.linkedin.com/in/pietro-bosoni-4817291b8/" 
                                                            immagine={!isSaf ? require("../images/direttivo/pietro_bosoni.webp") : require("../images/direttivo/pietro_bosoni.jpeg")} 
                                                            nome="Pietro Bosoni" 
                                                            ruolo="Contents" 
                                                            invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xl={2}
                                                    xs={6}
                                                    >
                                                        <CardDirettivo 
                                                            linkedin="https://www.linkedin.com/in/giovanni-cherubini-1690201a7/" 
                                                            immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} 
                                                            nome="Giovanni Cherubini" 
                                                            ruolo="DevOps" 
                                                            invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xl={2}
                                                    xs={6}
                                                    >
                                                        <CardDirettivo 
                                                            linkedin="https://www.linkedin.com/in/gariboldicristian" 
                                                            immagine={!isSaf ? require("../images/direttivo/cristian_gariboldi.webp") : require("../images/direttivo/cristian_gariboldi.jpeg")} 
                                                            nome="Cristian Gariboldi" 
                                                            ruolo="Events" 
                                                            invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                    item
                                                    xl={2}
                                                    xs={6}
                                                    >
                                                        <CardDirettivo 
                                                            linkedin="https://www.linkedin.com/in/pietro-dardano/" 
                                                            immagine={!isSaf ? require("../images/direttivo/pietro_dardano.webp") : require("../images/direttivo/pietro_dardano.jpeg")} 
                                                            nome="Pietro Dardano" 
                                                            ruolo="Projects" 
                                                            invisibile={false}/>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xl={2}
                                                        xs={6}
                                                        >
                                                            <CardDirettivo
                                                                linkedin="https://www.linkedin.com/in/davide-zanatta-207b12174"
                                                                immagine={!isSaf ? require("../images/direttivo/davide_zanatta.webp") : require("../images/direttivo/davide_zanatta.jpeg")} 
                                                                nome="Davide Zanatta" 
                                                                ruolo="Companies"
                                                                invisibile={false}/>
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
        {!isMobile ? <hr style={{width: "60vw", margin: "0 auto"}}/> : null }
        <div className="contatti">
            Info: info@aeapolimi.it
        </div>
        <div style={{height:"50px"}} />
        <Footer />
        </>
    )
}

export default HomePage;
