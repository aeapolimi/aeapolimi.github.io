import React from 'react';
import './App.css';

import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import News from "../components/News"
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
  firebase.analytics();
}

function NewsSection(){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    const intl = useIntl();
    var it = intl.locale === "it";
    if (articoli==="Caricamento..."){
        firebase.firestore().collection("news").orderBy('data', 'desc').get()
            .then(collec => {
                setArticoli(collec.docs)
            })
        }
    return (
        (articoli==="Caricamento...") ? (<div>Loading...</div>) : 
            articoli.map(articolo => {
                return (
                    <News 
                    autore={articolo.data().autore} 
                    titolo={it ? articolo.data().titolo_it : articolo.data().titolo} 
                    data={articolo.data().data.toDate()} 
                    descrizione={it ? articolo.data().sommario_it : articolo.data().sommario} 
                    codice={articolo.id}/>
                )
            })
    )
}

function Insiders() {
  const intl = useIntl()
    return (
      <>
        <Layout>
            <SEO title="Insiders" description="The best articles crafted with love by our associates." lang={intl.locale}/>
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
              AEA Insiders
            </Typography>
            <Typography variant="subtitle1" align="center" style={{marginBottom:"40px"}}>
              <FormattedMessage id="insiders.about" />
            </Typography>
            <NewsSection />
            <div style={{height:"40px"}}/>
        </Layout>
      </>
  );
}

export default Insiders;