import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import { isMobile } from 'react-device-detect';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Carosello(props){
  var videos = props.videos
  return (
      <div style={{"marginTop":"10vh"}}>
        <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={false}
        customTransition="all .5"
        // transitionDuration={1000} rompe il draggable
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        centerMode={true}
        >
        {videos.map(video => {
            return (
                <div key={video[0]}>
                    <Typography variant="h4" align="center" style={{marginBottom:"10px"}}>
                        {video[0]}
                    </Typography>
                    <div style={{"position":"relative","paddingBottom": "56.25%", "marginLeft":"10%"}}>
                        <iframe title={video[0]} style={{"position":"absolute"}} width="90%" height="90%" src={video[1]+"?color=white&theme=light&rel=0"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            )
        })}
      </Carousel>
    </div>
  )
}

function GrigliaMobile(props){
  var videos = props.videos
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {videos.map( video => {
        return(
        <Grid item>
          <div key={video[0]} style={{"marginTop":"20px", "width": "100vw"}}>
            <Typography variant="h4" align="center" style={{marginBottom:"10px"}}>
                {video[0]}
            </Typography>
            <div style={{"position":"relative","paddingBottom": "56.25%", "marginLeft":"10%"}}>
                <iframe title={video[0]} style={{"position":"absolute"}} width="90%" height="90%" src={video[1]+"?color=white&theme=light&rel=0"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </Grid>
        )}
      )}
      </Grid>
  )
}

function Video() {
    const classes = useStyles();
    const videos = [
      ["Mobile and Interactive autonomous robots at AIRLab", "https://www.youtube.com/embed/rvLjdZn88ho"]
      ["The AEA Tour: Industrial Automation at Evolut", "https://www.youtube.com/embed/e_I62FfOZ98"],
      ["Intelligent Collaborative Robotics at Merlin Lab", "https://www.youtube.com/embed/XqWN4rFf7sA"],
      ["AEAround The World", "https://www.youtube.com/embed/sx8VzeHlfOc"], 
      ["AEA Meets Prof. Savaresi", "https://www.youtube.com/embed/YRuNQF-eeKg"]
    ]
    const intl = useIntl();
    return (
      <>
        <Layout>
            <SEO title="AEA+" lang={intl.locale}/>
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
              AEA+
            </Typography>
            {isMobile ? 
            <GrigliaMobile videos={videos} /> //Se mobile griglia verticale
            : <Carosello videos={videos} /> //Se desktop carousel
            }
        </Layout>
      </>
  );
}

export default Video;