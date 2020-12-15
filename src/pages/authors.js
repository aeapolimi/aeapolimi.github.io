import React from 'react';
import './App.css';

import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { useIntl } from "gatsby-plugin-intl"

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

function NewsSection(props){
    const [articoli, setArticoli] = React.useState("Caricamento...");
    const intl = useIntl();
    var it = intl.locale === "it";
    if(props.autore === "" || !props.autore){
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
                    <News 
                    autore={articolo.data().autore} 
                    titolo={it ? articolo.data().titolo_it : articolo.data().titolo} 
                    data={articolo.data().data.toDate()} 
                    descrizione={it ? articolo.data().sommario_it : articolo.data().sommario} 
                    codice={articolo.id}
                    tag={articolo.data().tag}
                    />
                )
            })
    )
}

function Authors(props) {
    const nome = props.location.search.substring(1).replace("%20", " ");
    try {
        var autore = require("../images/direttivo/" + nome.replace(/\ /g, "_") + ".jpeg")
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