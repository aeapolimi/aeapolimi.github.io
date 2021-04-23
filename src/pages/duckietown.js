import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import SEO from "../components/seo"
import Layout from "../components/layout"

import logoduckie from "../images/duckie.png"
import immagineduckie from "../images/news/duckiebot.jpg"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    body:{
      [theme.breakpoints.up('md')]: {
        maxWidth:"55vw",
      },
      margin: "0 auto",
    },
    description:{
      [theme.breakpoints.down('md')]: {
        maxWidth:"95%",
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
                <FormattedMessage id="duckietown.sottotitoloduckie" />
              </Typography>
              <Typography variant="body1" gutterBottom align="center" style={{marginTop:"20px"}}>
                <IconButton color="primary" aria-label="read_more" href="https://www.duckietown.org/">
                  <LinkIcon style={{"fill":"#ef6c00"}}/>
                </IconButton>
                <a href="https://www.duckietown.org/" style={{color:"#ef6c00"}}>www.duckietown.org</a>
              </Typography>
              <img src={immagineduckie} alt="Duckie" width="100%"/>
              <div className={classes.description}>
                <Typography variant="h4" gutterBottom align="center" style={{marginTop:"40px"}}>
                  <FormattedMessage id="duckietown.whatistitolo" />
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  <FormattedMessage id="duckietown.whatis" />
                </Typography>
                <Typography variant="h4" gutterBottom align="center" style={{marginTop:"40px"}}>
                  <FormattedMessage id="duckietown.aidotitolo" />
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  <FormattedMessage id="duckietown.aido" />
                </Typography>
                <Typography variant="h4" gutterBottom align="center" style={{marginTop:"40px"}}>
                  <FormattedMessage id="duckietown.pmdstitolo" defaultMessage="Collaboration with PMDS:"/>
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  <FormattedMessage
                    id="duckietown.pmds"
                    values={{
                      PMDSURL: <a href="https://polimidatascientists.it/" style={{color:"#ef6c00"}}>Polimi Data Scientists</a>
                  }}
                  />
                </Typography>
                <Typography variant="h4" gutterBottom align="center" style={{marginTop:"40px"}}>
                  <FormattedMessage id="duckietown.ourprojecttitolo" />
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  <FormattedMessage id="duckietown.ourproject" />
                </Typography>
                <Typography variant="subtitle2" gutterBottom align="justify" style={{marginTop:"60px"}}>
                  <FormattedMessage id="duckietown.interested" />
                </Typography>
              </div>
              {/* <hr style={{marginTop:"40px"}}/> */}
               {/* <Typography variant="h3" gutterBottom align="center" style={{marginTop:"40px"}}>
                Join our team:
              </Typography> */}
              {/* <iframe width="100%" height="600px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9qaZb8UCbFBq16bhK-qrq5UQjgyT1dVMjlXMEpTOTA5U0tWTUpRT0RZRS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe> */}
              <Box textAlign='center'>
                <Button style={{marginTop: "40px", color:"#ef6c00"}} size="large" variant="outlined" color="primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9qaZb8UCbFBq16bhK-qrq5UQjgyT1dVMjlXMEpTOTA5U0tWTUpRT0RZRS4u">
                  Join our team
                </Button>
              </Box>
              <hr style={{marginTop:"40px"}}/>
              <div className={classes.description}>
                <Typography variant="body1" gutterBottom align="justify" style={{marginBottom: "40px"}}>
                  <FormattedMessage id="duckietown.resources" />
                </Typography>
                <Typography variant="h3" gutterBottom align="left" style={{marginTop:"40px", color: "black"}} component={Link} to="/duckie/getting_started">
                  <FormattedMessage id="duckietown.1_introduzione" />
                  <IconButton color="primary" aria-label="read_more" component={Link} to="/duckie/getting_started">
                    <ArrowForwardIosIcon style={{"fill":"black"}}/>
                  </IconButton>
                </Typography>
                <Typography variant="subtitle2" gutterBottom align="left" style={{marginBottom:"40px"}}>
                  <FormattedMessage id="duckietown.1_sottotitolo" />
                </Typography>
                {/* <Typography variant="h3" gutterBottom align="left" style={{marginTop:"40px"}}>
                  <FormattedMessage id="duckietown.2_introduzione" />
                  <IconButton color="primary" aria-label="read_more" component={Link} to="/duckie/stable_baseline_example">
                    <ArrowForwardIosIcon style={{"fill":"black"}}/>
                  </IconButton>
                </Typography>
                <Typography variant="subtitle2" gutterBottom align="left">
                  <FormattedMessage id="duckietown.2_sottotitolo" />
                </Typography> */}
              </div>
            </div>
        </Layout>
      </>
  );
}

export default Projects;