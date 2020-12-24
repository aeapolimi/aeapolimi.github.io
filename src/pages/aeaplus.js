import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        // overflowX: "visible",
        maxWidth: "80vw",
        marginLeft: "10vw",
        backgroundColor: "transparent",
    },
    tableroot: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
  }));

function Domande() {
    const classes = useStyles();
    const intl = useIntl();
    return (
      <>
        <Layout>
            <SEO title="AEA+" lang={intl.locale}/>
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
              AEA+
            </Typography>
            <Typography variant="h4" align="center" style={{marginBottom:"10px"}}>
                AEAround The World
            </Typography>
            <div style={{"position":"relative","paddingBottom": "56.25%", "marginLeft":"10%"}}>
                <iframe style={{"position":"absolute"}} width="90%" height="90%" src="https://www.youtube.com/embed/sx8VzeHlfOc?color=white&theme=light&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </Layout>
      </>
  );
}

export default Domande;