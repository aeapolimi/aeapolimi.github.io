import React from 'react';
import './Articolo.css';

import { graphql } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import {  Link } from "gatsby-plugin-intl"

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
}))

function Carica(props){
  const classes = useStyles();
  const intl = useIntl();
  var it = intl.locale === "it";
  var articolo = props.articolo;
  var date = new Date(articolo.date);
  return (
    <div className="contenuto">
      <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
      <Typography variant="overline" color="textSecondary" gutterBottom>
          TAG:
          {
            articolo.tag === null ?
            "" :
              articolo.tag.map((el) => <Link to={"/tags?"+el} style={{color:"inherit"}}> {el}</Link>)
          }
        </Typography>
      <Typography variant="h6" align="center">
        {date.toLocaleString("default", { month: "long", day: "numeric", year: "numeric" })}
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

function Articolo({ data }) {
  const intl = useIntl();
  return (
    <>
      <Layout>
          <SEO title={data.news.titolo} description={data.news.descrizione} lang={intl.locale} image={data.news.immagine}/>
          <Carica articolo={data.news}/>
      </Layout>
    </>
  );
}

export const query = graphql`
  query($pagePath: String!) {
    news(id: { eq: $pagePath } ) {
      sommario
      autore
      date
      immagine
      sommario_it
      tag
      testo
      testo_it
      titolo
      titolo_it
      id
    }
  }
`

export default Articolo;