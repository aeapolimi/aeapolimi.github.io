import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import { navigate } from "gatsby-plugin-intl"

function Appunti(props){
    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setAppunti(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                Appunti
            </Typography>
            <div style={{height: "20px"}} />
            <Button variant="contained" href="https://drive.google.com/file/d/1rrlZdiWcQZQrZKrDdXGSSXwQ_zVjZ2dz/view" target="_blank">
                Fondamenti di automatica
            </Button>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>Lezioni</Button>
                <Button>Esercitazioni</Button>
            </ButtonGroup>
        </div>
    )
}

export default Appunti;