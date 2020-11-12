import React from 'react';
import './Articolo.css';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { navigate } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

function Carica(props){
  const [articolo, setArticolo] = React.useState("Caricamento...")
  if (articolo==="Caricamento..."){
      firebase.firestore().collection("news").doc(props.articolo).get()
          .then(collec => {
              if (!collec.exists){
                navigate("/Insiders")
              }
              else{
                setArticolo(collec.data())
              }
          })
      }
  console.log(articolo);
  return (
    (articolo==="Caricamento...") ? (<div>Loading...</div>) : 
    <div className="contenuto">
      {/* <img height="700vh" src={articolo.immagine.includes("http") ? articolo.immagine : require("../images/news/"+articolo.immagine)} alt={articolo.titolo} /> */}
      <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
      <Typography variant="h6" align="center">
        {articolo.data}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        by {articolo.autore}
      </Typography>
     <Typography variant="h1" align="center">
        {articolo.titolo}
      </Typography>
      <Typography variant="subtitle1" align="center">
        {articolo.sommario}
      </Typography>
      <Divider style={{marginTop: "20px", marginBottom: "40px"}}/>
      <div key={articolo.titolo} dangerouslySetInnerHTML={{ __html: articolo.testo }}/>
    </div>
  )
}

function Articolo(props) {
  const codice = props.location.search.substring(1);
  return (
    <>
      <Layout>
          <SEO title="Article" />
          {(codice==="") ? 
          <img src={require("../images/meme/meme_articoli.jpg")} alt="You shouldn't be here."/>:
          <Carica articolo={codice} />
          }
      </Layout>
    </>
  );
}

export default Articolo;