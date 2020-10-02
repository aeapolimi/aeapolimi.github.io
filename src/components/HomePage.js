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
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import firebase from 'firebase';

import { navigate } from "gatsby"

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
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
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

    const handleOpen = () => {
        setLeggi(true);
      };
    
      const handleClose = () => {
        setLeggi(false);
      };

    return (
        <>
        <Card key={props.titolo} className={classes.root} style={{minHeight:"20vh"}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={props.titolo}
                    subheader={props.data}
                />
                {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                /> */}
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.sommario}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                    className={classes.expand}
                    onClick={handleOpen}
                    aria-label="leggi"
                    >
                        <AddCircleIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Modal
                open={leggi}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <p>
                    {props.testo}
                </p>
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
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        centerMode={true}
        >
            {(articoli=="Caricamento...") ? <div>Caricamento...</div> : 
            articoli.map(articolo => {
                return (
                    <div>
                        <ArticoloCarousel 
                        titolo={articolo.data().titolo} 
                        sommario={articolo.data().sommario}
                        data={articolo.data().data}
                        testo={articolo.data().testo}
                        />
                    </div>
                )
            })}
    </Carousel>)
}

function HomePage (){
    var width = "20%";
    var maxCardwidth = "50vw";
    if (isMobile){
        width = "60%";
        maxCardwidth = "100vw";
    }
    return(<>
            <div className="App">
                <AppBar position="fixed" style={{backgroundColor: "transparent"}} elevation={0}>
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
                    <div style={{margin:"20px"}}>
                        <Typography variant="h2" component="h3">
                            News
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
                                            Associazione Ingegneri dell'Automazione del Politecnico di Milano.
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Una forte rete di networking, conoscenza del settore e rapporti con le aziende ci permettono di 
                                            aiutare i nostri associati a diventare ancora più competitivi.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick = {() => navigate("/Associati")}>Associati</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
            </div>
        </>
    )
}

export default HomePage;