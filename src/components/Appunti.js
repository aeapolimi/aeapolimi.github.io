import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

function Appunti(props){
    // NB basta mettere cam tanto poi premendo il pulsante si aggiunge il resto da solo
    const [apriAnno, setAnno] = React.useState({quarto: false});
    const [apriNote, setNote] = React.useState({cam: false});
    var note = {quarto: 
                [{materia: "cam", urlLezioni: "https://drive.google.com/file/d/1VRWctrQ6EKFEaGS5q7momCThXSD7q5AY/view?usp=sharing", urlEsercitazioni: "https://drive.google.com/file/d/1wAeSt__xoiGsmKfjr8TteGfLDCTlA55f/view?usp=sharing"},
                {materia: "dms", urlLezioni: "https://drive.google.com/file/d/15oRcXrhtjueZ5oTGq5Yj30MXc8aZG9Ja/view?usp=sharing", urlEsercitazioni: "https://drive.google.com/file/d/1Hbzo0Ag5Vplnc5NyIhZiVwXW7pysYE-G/view?usp=sharing"},
                {materia: "mida", urlLezioni: "https://drive.google.com/file/d/1R4aw3g1EZsEji3h-hDjyJOsMKSOKuQUT/view?usp=sharing", urlEsercitazioni: "https://drive.google.com/file/d/1t-B_ukg7g5phSqOHPjivsR7CbpvxapcB/view?usp=sharing"}
                ]}
    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setAppunti(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                Appunti
            </Typography>
            <div style={{height: "20px"}} />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                style={{
                    marginTop: "20px"
                }}
            >
                {Object.keys(note).map((anno) => 
                    <><Button id={anno} variant="contained" onClick={() => setAnno({[anno]: !apriAnno[anno]})}>
                        {anno}
                    </Button>
                    { apriAnno[anno] ? 
                        <Grid
                        container
                        direction="raw"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        style={{
                            marginTop: "20px"
                        }}
                        >
                        {note[anno].map( (nota) => {
                            console.log(apriNote[nota.materia])
                            return(<><Grid item>
                                <Button id={nota.materia} variant="contained" onClick={() => setNote({[nota.materia]: !apriNote[nota.materia]})}>
                                    {nota.materia}
                                </Button>
                            </Grid>
                            {apriNote[nota.materia] ? 
                                <Grid item>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button href={nota.urlLezioni} target="_blank">Lezioni</Button>
                                        <Button href={nota.urlEsercitazioni} target="_blank">Esercitazioni</Button>
                                    </ButtonGroup>
                                </Grid> : null
                            }
                            </>)
                        }
                            )
                        }
                        </Grid> : null
                    }
                    </>
                )}
            </Grid>
        </div>
    )
}

export default Appunti;