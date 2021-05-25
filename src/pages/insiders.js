import React from 'react';
import './App.css';

import { graphql, StaticQuery } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Autocomplete from '@material-ui/lab/Autocomplete';

import firebase from 'firebase/app';
import 'firebase/analytics';

import { Link, useIntl, FormattedMessage } from "gatsby-plugin-intl"

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

const useStyles = makeStyles((theme) => ({
  body:{
    maxWidth:"100%",
    [theme.breakpoints.up('md')]: {
      maxWidth:"57vw",
    },
    margin: "0 auto",
  },
  search: {
    maxWidth: "80vw",
    [theme.breakpoints.up('md')]: {
      maxWidth: "10vw",
    },
    margin: "0 auto",
    marginBottom: "30px"
  }
}));


function NewsSection(){
    const classes = useStyles();
    const intl = useIntl();
    var it = intl.locale === "it";
    return (
      <StaticQuery
        query={graphql`
        query Insiders {
            allNews(sort: {fields: date, order: DESC}) {
              edges {
                node {
                  sommario
                  autore
                  date
                  immagine
                  sommario_it
                  tag
                  titolo
                  titolo_it
                  id
                }
              }
            }
          }
          `}
        render={data => 
          <>
            <Autocomplete
            id="search"
            className={classes.search}
            freeSolo
            options={data.allNews.edges.map((articolo) => it ? {"id": articolo.id, "title": articolo.data().titolo_it} : {"id": articolo.id, "title" : articolo.data().titolo})}
            getOptionLabel={(option) =>  option.title}
            renderOption={(option) => (
                <Link
                  style={{ color: "black" }}
                  to={"/"+option.id}
                >
                  {option.title}
                </Link>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Search" margin="normal" variant="outlined" />
            )}
          />
          <Grid container spacing={3} justify="center" className={classes.body}>
            {data.allNews.edges.map(articolo => {
                    return (
                      <Grid item xs={12} sm={6} xl={3} key={articolo.id}>
                          <News 
                          autore={articolo.node.autore} 
                          titolo={it ? articolo.node.titolo_it : articolo.node.titolo} 
                          data={new Date(articolo.node.date)} 
                          descrizione={it ? articolo.node.sommario_it : articolo.node.sommario} 
                          codice={articolo.node.id}
                          tag={articolo.node.tag}
                          immagine={articolo.node.immagine}
                          />
                      </Grid>
                    )
                })}
          </Grid>
        </>
      }
      />
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