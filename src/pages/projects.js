import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby-plugin-intl"

import SEO from "../components/seo"
import Layout from "../components/layout"

import duckie from "../images/duckietown.jpg"
import sailing from "../images/sailing.png"

import 'fontsource-roboto';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 240,
    },
  });

function Projects() {
    const classes = useStyles();
    const intl = useIntl();
    return (
        <>
        <Layout>
            <SEO title="Projects" description="AEA Projects." lang={intl.locale}/>
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
                <FormattedMessage id="projects.title" />
            </Typography>
            <div style={{height:"40px"}}/>
            <div style={{width: "60%", margin: "0 auto"}}>
                <Grid container spacing={9}direction="row" alignItems="center" justify="center"  style={{minWidth: "100%"}}>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea component={Link} to="/duckietown">
                                <CardMedia
                                className={classes.media}
                                image={duckie}
                                title="Duckietown"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" style={{color:"black"}} component="h2">
                                    AI Driving Olympics, Duckietown
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <FormattedMessage id="projects.duckietown" />
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:"#ef6c00"}} component={Link} to="/duckietown" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea component={Link} to="/sailing_team">
                                <CardMedia
                                className={classes.media}
                                image={sailing}
                                title="Sailing Team"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" style={{color:"black"}} component="h2">
                                    Sailing Team, join the project
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                AEA is collaborating with PoliMi Sailing Team in order to create a new boat control system

                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:"#ef6c00"}} component={Link} to="/sailing_team" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Layout>
      </>
  );
}

export default Projects;