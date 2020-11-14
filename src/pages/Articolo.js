import React from 'react';
import './Articolo.css';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { navigate, Link } from "gatsby-plugin-intl"

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
  firebase.analytics();
}

const useStyles = makeStyles((theme) => ({
  testoArticolo: {
    textAlign:"justify",
    margin:"0 auto",
    fontSize: "1rem",
    [theme.breakpoints.up('sm')]: {
      maxWidth:"55vw",
    },
  },
}))

function Carica(props){
  const classes = useStyles();
  const [articolo, setArticolo] = React.useState("Caricamento...")
  if (props.codice == ""){
    return ("You shouldn't be here. Neither should I.");
    // return (<img src={require("../images/meme/meme_articoli.jpg")} alt="You shouldn't be here."/>;)
  }
  if (articolo==="Caricamento..."){
      firebase.firestore().collection("news").doc(props.codice).get()
          .then(collec => {
              if (!collec.exists){
                navigate("/Insiders")
              }
              else{
                setArticolo(collec.data())
                props.setInfo({titolo: collec.data().titolo, descrizione: collec.data().sommario})
              }
          })
      }
  return (
    (articolo==="Caricamento...") ? (<div>Loading...</div>) : 
    <div className="contenuto">
      {/* <img height="700vh" src={articolo.immagine.includes("http") ? articolo.immagine : require("../images/news/"+articolo.immagine)} alt={articolo.titolo} /> */}
      <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
      <Typography variant="h6" align="center">
        {articolo.data.toDate().toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        <Link to={"/Authors?"+articolo.autore} style={{color:"inherit"}}>
          by {articolo.autore}
        </Link>
      </Typography>
     <Typography variant="h1" align="center">
        {articolo.titolo}
      </Typography>
      <Typography variant="subtitle1" align="center">
        {articolo.sommario}
      </Typography>
      <Divider style={{marginTop: "20px", marginBottom: "40px"}}/>
      <Typography variant="p">
        <div className={classes.testoArticolo} key={articolo.titolo} dangerouslySetInnerHTML={{ __html: articolo.testo }}/>
      </Typography>
      <div style={{height:"40px"}} />
    </div>
  )
}

function Articolo(props) {
  const [info, setInfo] = React.useState({titolo:"AEA Polimi", descrizione:"An Article on AEA Insiders by a member of the Automation Engineering Association."})
  const codice = props.location.search.substring(1);
  return (
    <>
      <Layout>
          <SEO title={info.titolo} description={info.descrizione}/>
          <Carica setInfo={setInfo} codice={codice}/>
      </Layout>
    </>
  );
}

export default Articolo;