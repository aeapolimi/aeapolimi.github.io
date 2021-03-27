import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { PDFViewer } from '@react-pdf/renderer';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import { FormattedMessage } from "gatsby-plugin-intl"

import { isMobile } from 'react-device-detect';

import MemberCard from "../components/MemberCard"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

function Tessera(props){

    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setAppunti(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                Membership card
            </Typography>

            <div style={{height: "20px"}} />
            {isMobile ? 
            "Membership card is downloadable only from a computer :(" :
            <PDFViewer style={{height:"50vh", width: "50vw"}}>
                <MemberCard username={props.username}/>
            </PDFViewer>}
        </div>
    )
}

export default Tessera;