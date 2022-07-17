import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/analytics';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import Event from "../components/Event"
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
    body:{
      maxWidth:"100%",
      [theme.breakpoints.up('md')]: {
        maxWidth:"57vw",
      },
      margin: "0 auto",
    },
  }));


function NewsSection(){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    const intl = useIntl();
    var it = intl.locale === "it";
    if (articoli==="Caricamento..."){
        firebase.firestore().collection("news").where("tag", "array-contains", "event").orderBy('data', 'desc').get()
            .then(collec => {
                setArticoli(collec.docs)
            })
        }
    return (
        (articoli==="Caricamento...") ? (<div>Loading...</div>) : 
            articoli.map(articolo => {
                return (
                    <Grid item xs={12} sm={6} xl={3}>
                        <Event 
                        autore={articolo.data().autore} 
                        titolo={it ? articolo.data().titolo_it : articolo.data().titolo} 
                        data={articolo.data().data.toDate()} 
                        descrizione={it ? articolo.data().sommario_it : articolo.data().sommario} 
                        codice={articolo.id}
                        tag={articolo.data().tag}
                        immagine={articolo.data().immagine}
                        />
                    </Grid>
                )
            })
    )
}

function Events() {
    const classes = useStyles();
    const intl = useIntl()
    return (
      <>
        <Layout>
            <SEO title="Events" description="All past, present and future AEA events." lang={intl.locale}/>
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
              AEA Events
            </Typography>
            <Typography variant="subtitle1" align="center" style={{marginBottom:"40px"}}>
              <FormattedMessage id="events.about" />
            </Typography>
            <div>
                <Grid container spacing={3} justify="center" className={classes.body}>
                    <NewsSection />
                </Grid>
            </div>
            <div style={{height:"40px"}}/>
        </Layout>
      </>
  );
}

export default Events;