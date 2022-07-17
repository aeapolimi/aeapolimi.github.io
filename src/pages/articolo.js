import React from 'react';
import './Articolo.css';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/analytics';

import { navigate, Link } from "gatsby-plugin-intl"

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

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
  appId: "1:252147138104:web:cc2a953476b0b77f65b0cd",
  measurementId: "G-0D5Z9JD5XH"
};
if (typeof window!== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

const useStyles = makeStyles((theme) => ({
  testoArticolo: {
    textAlign:"justify",
    margin:"0 auto",
    fontSize: "1rem",
    [theme.breakpoints.up('sm')]: {
      maxWidth:"55vw",
    },
    "& a": {
      color: '#ef6c00',
    },
    "& a:active": {
      color: '#ef6c00',
    },
    "& a:visited": {
      color: '#ef6c00',
    },
    "& img": {
      width: '100vw',
    }
  },
}))

function Carica(props){
  const classes = useStyles();
  const [articolo, setArticolo] = React.useState("Caricamento...")
  const intl = useIntl();
  var it = intl.locale === "it";
  if (props.codice === ""){
    return ("If you see this message please refresh the page. If you see it again something has gone super wrong.");
    // return (<img src={require("../images/meme/meme_articoli.jpg")} alt="You shouldn't be here."/>;)
  }
  if (articolo==="Caricamento..."){
      firebase.firestore().collection("news").doc(props.codice).get()
          .then(collec => {
              if (!collec.exists){
                navigate("/insiders")
              }
              else{
                setArticolo(collec.data())
                let titolo = it ? collec.data().titolo_it : collec.data().titolo;
                let sommario = it ? collec.data().sommario_it : collec.data().sommario;
                props.setInfo({titolo: titolo, descrizione: sommario})
              }
          })
      }
  return (
    (articolo==="Caricamento...") ? (<div>Loading...</div>) : 
    <div className="contenuto">
      {/* <img height="700vh" src={articolo.immagine.includes("http") ? articolo.immagine : require("../images/news/"+articolo.immagine)} alt={articolo.titolo} /> */}
      <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
      <Typography variant="overline" color="textSecondary" gutterBottom>
          TAG:
          {
            articolo.tag === undefined ?
            "" :
              articolo.tag.map((el) => <Link to={"/tags?"+el} style={{color:"inherit"}}> {el}</Link>)
          }
        </Typography>
      <Typography variant="h6" align="center">
        {articolo.data.toDate().toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        <Link to={"/authors?"+articolo.autore} style={{color:"inherit"}}>
          <FormattedMessage id="insiders.by" /> {articolo.autore}
        </Link>
      </Typography>
     <Typography variant="h1" align="center">
        {it ? articolo.titolo_it : articolo.titolo}
      </Typography>
      <Typography variant="subtitle1" align="center">
        {it ? articolo.sommario_it : articolo.sommario}
      </Typography>
      <Divider style={{marginTop: "20px", marginBottom: "40px"}}/>
      <Typography variant="p">
        <div className={classes.testoArticolo} key={articolo.titolo} dangerouslySetInnerHTML={{ __html: it ? articolo.testo_it : articolo.testo }}/>
      </Typography>
      <div style={{height:"40px"}} />
    </div>
  )
}

function Articolo(props) {
  const codice = props.location.search.substring(1);
  const [info, setInfo] = React.useState({titolo: codice.replace(/\_/g, " "), descrizione:"An Article on AEA Insiders by a member of the Automation Engineering Association."})
  const intl = useIntl();
  return (
    <>
      <Layout>
          <SEO title={info.titolo} description={info.descrizione} lang={intl.locale}/>
          <Carica setInfo={setInfo} codice={codice}/>
      </Layout>
    </>
  );
}

export default Articolo;