import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';

import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import SEO from "../components/seo"
import Layout from "../components/layout"

import logoduckie from "../images/duckie.png"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    body:{
      [theme.breakpoints.up('sm')]: {
        maxWidth:"55vw",
      },
      margin: "0 auto",
    },
    titlelogo:{
      [theme.breakpoints.up('sm')]: {
        height: "60px"
      },
      [theme.breakpoints.down('sm')]: {
        height: "30px"
      },
      
    }
  }));

function Projects() {
    const classes = useStyles();
    const intl = useIntl();
    return (
      <>
        <Layout>
            <SEO title="Projects" lang={intl.locale}/>
            <div className={classes.body}>
              <Typography variant="h1" gutterBottom align="center">
                <img src={logoduckie} className={classes.titlelogo} alt="duckietown"/>
                  Duckietown
              </Typography>
              <Typography variant="h4" gutterBottom align="center">
                <FormattedMessage id="projects.sottotitoloduckie" />
              </Typography>
              <Typography variant="body1" gutterBottom align="justified">
                <FormattedMessage id="projects.descrizioneduckie" />
              </Typography>
              <Typography variant="h3" gutterBottom align="left" style={{marginTop:"40px"}}>
                <FormattedMessage id="projects.1_introduzione" />
                <IconButton color="primary" aria-label="read_more" component={Link} to="/duckie/getting_started">
                  <ArrowForwardIosIcon style={{"fill":"black"}}/>
                </IconButton>
              </Typography>
              <Typography variant="subtitle2" gutterBottom align="left">
                <FormattedMessage id="projects.1_sottotitolo" />
              </Typography>
              <Typography variant="h3" gutterBottom align="left" style={{marginTop:"40px"}}>
                <FormattedMessage id="projects.2_introduzione" />
                <IconButton color="primary" aria-label="read_more" component={Link} to="/duckie/stable_baseline_example">
                  <ArrowForwardIosIcon style={{"fill":"black"}}/>
                </IconButton>
              </Typography>
              <Typography variant="subtitle2" gutterBottom align="left">
                <FormattedMessage id="projects.2_sottotitolo" />
              </Typography>
            </div>
        </Layout>
      </>
  );
}

export default Projects;