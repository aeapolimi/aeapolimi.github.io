import React from 'react';
import './homePage.css';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import {isMobile} from 'react-device-detect';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function HomePage (){
    var width = "20%";
    var maxCardwidth = "50vw";
    if (isMobile){
        width = "60%";
        maxCardwidth = "100vw";
    }
    return(<>
            <div className="App">
                {/* <iframe title="bg" id="bg" src='./robotrender.html' frameBorder="0"/> */}
                <iframe title="bg" id="bg" src='https://giuliovv.github.io/aea/robotrender.html' frameBorder="0"/> 
                <header className="App-header">
                    <div className="rectangle" key="titolo"><span className="titoloLogo">AEA</span></div>
                </header>
                <div className="freccia" style={{height:0, bottom:80, position:"relative"}}>
                    <Fab color="inherit" size="small" href="#about" aria-label="about">
                        <KeyboardArrowDownIcon style={{fill: "black"}}/>
                    </Fab>
                </div>
                <div className="about" id="about">
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid
                            item
                            xs={12}
                            >
                                <Card className="cardAbout" style={{display: 'inline-block', maxWidth: {maxCardwidth}}}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Un punto di riferimento per il settore.
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Associazione Ingegneri dell'Automazione del Politecnico di Milano.
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Una forte rete di networking, conoscenza del settore e rapporti con le aziende ci permettono di 
                                            aiutare i nostri associati a diventare ancora più competitivi.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Associati</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
            </div>
        </>
    )
}

export default HomePage;