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

import duckie from "../images/sailing.png"
import logoduckie from "../images/logo_sailing.png"
import immagineduckie from "../images/sailing.png"

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
            <SEO title="Sailing Team" image={duckie} lang={intl.locale}/>
            <div className={classes.body}>
              <Typography variant="h1" gutterBottom align="center">
                <img src={logoduckie} className={classes.titlelogo} alt="sailing"/>
                  
              </Typography>
              <Typography variant="h4" gutterBottom align="center">
                AEA X SAILING TEAM
              </Typography>
              
              <img src={immagineduckie} alt="Duckie" width="100%"/>
              <div className={classes.description}>
                <Typography variant="h4" gutterBottom align="center" style={{marginTop:"40px"}}>
                JOIN THIS INTERNATIONAL PROJECT WITH AEA!
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                

                AEA is collaborating with PoliMi Sailing Team in order to join an international event, to be held in july 2023, where foiling boats are designed by the students.

                In order to make the boat go faster, the goal is to stabilize the catamaran during it’s “flight time”.
                Last year it worked mechanically, but in this edition we want to automate the process.
                There is one main problem to solve: controlling the foil.
                To do that, we are creating two teams: one focused on solving the problem through control theory and one specialized in machine learning.
                </Typography>
                <Typography variant="h4" gutterBottom align="center" style={{marginTop:"40px"}}>
                TWO TEAMS
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                <ol>
                <li> The Control Team is responsible of the design, developement and testing of the control system of the boat. Advanced control algorithms together with filters and state observers will be used in order to stabilize the catamaran. It will be interesting and challenging at the same time to find a controller which can work despite the sea waves. </li>

                <li> For the Machine Learning Team we have to find the best modelization to approach the problem, based on it we will gather new coherent data and identify the best ML model architecture. Finally it will need to be optimized to run directly on the edge.</li>
                </ol>
                
                
                </Typography>
                
               
                <Typography variant="subtitle2" gutterBottom align="justify" style={{marginTop:"60px"}}>
                We are confident this experience will grow your skillset, but most importantly we hope that you have something to teach us and the team.

There is a lot of work to do, that’s why we are counting on you.
                </Typography>
              </div>
              {/* <hr style={{marginTop:"40px"}}/> */}
               {/* <Typography variant="h3" gutterBottom align="center" style={{marginTop:"40px"}}>
                Join our team:
              </Typography> */}
              {/* <iframe width="100%" height="600px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9qaZb8UCbFBq16bhK-qrq5UQjgyT1dVMjlXMEpTOTA5U0tWTUpRT0RZRS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe> */}
              <Box textAlign='center'>
                <Button style={{marginTop: "40px", color:"#ef6c00"}} size="large" variant="outlined" color="primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9x_hjbou89No8FZoHcG94VUME1CVjBFUkRRUVYzVUU2RjBKNDc5T1g0VCQlQCN0PWcu">
                  compile the form
                </Button>
              </Box>
              <hr style={{marginTop:"40px"}}/>
              <div className={classes.description}>
                
              </div>

              <Typography variant="body1" gutterBottom align="center" style={{marginTop:"20px"}}>
                <IconButton color="primary" aria-label="read_more" href="https://www.duckietown.org/">
                  <LinkIcon style={{"fill":"#ef6c00"}}/>
                </IconButton>
                <a href="https://www.polimisailingteam.it/Home/index.html" style={{color:"#ef6c00"}}>www.polimisailingteam.it</a>
              </Typography>
            </div>

        </Layout>
      </>
  );
}

export default Projects;
