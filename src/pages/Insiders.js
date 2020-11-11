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

import { Link } from "gatsby"

// Gatsby
import SEO from "../components/seo"
import Layout from "../components/layout"

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: "75vw",
      margin: "0 auto"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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
        <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {props.titolo}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                    {props.descrizione}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={'/Articolo/?'+codice} size="small" style={{color:"black"}}>Learn More</Button>
                </CardActions>
            </Card>
    )
}

function NewsSection(){
    const [articoli, setArticoli] = React.useState("Caricamento...")
    if (articoli==="Caricamento..."){
        firebase.firestore().collection("news").get()
            .then(collec => {
                setArticoli(collec.docs)
            })
        }
    return (
        (articoli==="Caricamento...") ? (<div>Caricamento...</div>) : 
            articoli.map(articolo => {
                return (
                    <News titolo={articolo.data().titolo} descrizione={articolo.data().sommario} codice={articolo.id}/>
                )
            })
    )
}

function Insiders() {
    return (
      <>
        <Layout>
            <SEO title="Insider" />
            <NewsSection />
        </Layout>
      </>
  );
}

export default Insiders;