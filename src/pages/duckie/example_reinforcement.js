import React from 'react';
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';

import { useIntl } from "gatsby-plugin-intl"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    frame:{
        // overflowX: "visible",
        minWidth: "100%",
        minHeight: "85vh"
    },
  }));

function Projects() {
    const classes = useStyles();
    const intl = useIntl();
    return (
      <>
        <Layout>
            <SEO title="Use of duckietown example" lang={intl.locale}/>
            <iframe className={classes.frame} src='https://www.aeapolimi.it/duckie_gists/example_duckie_reinforcement.html' frameBorder="0" loading="lazy"/> 
        </Layout>
      </>
  );
}

export default Projects;