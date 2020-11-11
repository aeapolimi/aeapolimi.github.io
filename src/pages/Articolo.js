import React from 'react';
import './Articolo.css';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import firebase from 'firebase/app';
import 'firebase/firestore';

// Gatsby
import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

function Carica(props){
  const [articolo, setArticolo] = React.useState("Caricamento...")
  if (articolo==="Caricamento..."){
      firebase.firestore().collection("news").doc(props.articolo).get()
          .then(collec => {
              setArticolo(collec.data())
          })
      }
  console.log(articolo);
  return (
    (articolo==="Caricamento...") ? (<div>Caricamento...</div>) : 
    <div className="contenuto">
      {/* <img height="700vh" src={articolo.immagine.includes("http") ? articolo.immagine : require("../images/news/"+articolo.immagine)} alt={articolo.titolo} /> */}
      <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
      <Typography variant="h6" align="center">
        {articolo.data}
      </Typography>
     <Typography variant="h1" align="center">
        {articolo.titolo}
      </Typography>
      <Typography variant="p" align="center">
        {articolo.sommario}
      </Typography>
      <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
      <div key={articolo.titolo} dangerouslySetInnerHTML={{ __html: articolo.testo }}/>
    </div>
  )
}

function Articolo(props) {
    return (
      <>
        <Layout>
            <SEO title="Articolo" />
            <Carica articolo={props.location.search.substring(1)} />
        </Layout>
      </>
  );
}

export default Articolo;