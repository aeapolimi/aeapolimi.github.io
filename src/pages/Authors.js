import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { Link } from "gatsby-plugin-intl"

// Gatsby
import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

const firebaseConfig = {
  apiKey: "AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",
  authDomain: "aeapolimiweb.firebaseapp.com",
  databaseURL: "https://aeapolimiweb.firebaseio.com",
  projectId: "aeapolimiweb",
  storageBucket: "aeapolimiweb.appspot.com",
  messagingSenderId: "252147138104",
  appId: "1:252147138104:web:cc2a953476b0b77f65b0cd"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: "75vw",
      margin: "0 auto",
      marginBottom: "20px",
      textAlign: "center",
      borderColor: '#ef6c00',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function News(props){
    const classes = useStyles();
    var codice = props.codice;
    return (
        <Card key={props.titolo} className={classes.root} variant="outlined" raised={true}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.data.toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {props.titolo}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                     by {props.autore}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {props.descrizione}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button component={Link} to={'/Articolo/?'+codice} size="small" style={{color:"black"}}>Keep reading</Button>
                </CardActions>
            </Card>
    )
}

function NewsSection(props){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    if(props.autore == "" || !props.autore){
        return("You shouldn't be here.")
    }
    if (articoli==="Caricamento..."){
        firebase.firestore().collection("news").where("autore", "==", props.autore).get()
            .then(collec => {
                setArticoli(collec.docs)
            })
        }
    return (
        (articoli==="Caricamento...") ? (<div>Loading...</div>) : 
            articoli.map(articolo => {
                return (
                    <News autore={articolo.data().autore} titolo={articolo.data().titolo} data={articolo.data().data.toDate()} descrizione={articolo.data().sommario} codice={articolo.id}/>
                )
            })
    )
}

function Authors(props) {
    const nome = props.location.search.substring(1).replace("%20", " ");
    console.log("../images/direttivo/"+ nome.substr(0,nome.indexOf(' ')).toLowerCase() + ".jpeg")
    try {
        var autore = require("../images/direttivo/" + nome.substr(0,nome.indexOf(' ')).toLowerCase() + ".jpeg")
    }
    catch(error){
        autore = undefined;
    }
    return (
        <>
        <Layout>
            <SEO title={nome} />
            {autore ? 
            <div style={{minWidth: "100%"}}><img src={autore} alt={nome} height="100px" style={{borderRadius: 30, display:"block", margin: "0 auto"}}/></div>
                 : null}
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
              {nome}
            </Typography>
            <Typography variant="subtitle1" align="center" style={{marginBottom:"40px"}}>
              All the articles written by {nome}.
            </Typography>
            <NewsSection autore={nome}/>
            <div style={{height:"40px"}}/>
        </Layout>
        </>
    );
}

export default Authors;