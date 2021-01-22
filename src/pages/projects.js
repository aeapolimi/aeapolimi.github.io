import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import { useIntl } from "gatsby-plugin-intl"

import Script from 'react-load-script'

import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    frame:{
        // overflowX: "visible",
        minWidth: "100%",
        minHeight: "90vh"
    },
  }));

function Projects() {
    const classes = useStyles();
    const intl = useIntl();
    return (
      <>
        <Layout>
            <SEO title="Projects" lang={intl.locale}/>
            <iframe className={classes.frame} src='./duckiegist.html' frameBorder="0" loading="lazy"/> 
        </Layout>
      </>
  );
}

export default Projects;