import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import { FormattedMessage } from "gatsby-plugin-intl"

const corsi = [
    { nome: "AGILE PROJECT MANAGEMENT", tab: "TRANSVERSAL SKILLS"},
    { nome: "POWER SYSTEMS: ETHICAL ISSUES AND SOCIAL IMPLICATIONS", tab: "TRANSVERSAL SKILLS"},
    { nome: "CRITICAL THINKING", tab: "TRANSVERSAL SKILLS"},
    { nome: "EMERGING TECHNOLOGIES AND SOCIETAL CHALLENGES", tab: "TRANSVERSAL SKILLS"},
    { nome: "ENGINEERING METHODS SUPPORTING JUSTICE", tab: "TRANSVERSAL SKILLS"},
    { nome: "ETHICS FOR TECHNOLOGY", tab: "TRANSVERSAL SKILLS"},
    { nome: "HISTORY OF INDUSTRIAL TECHNOLOGICAL INNOVATION", tab: "TRANSVERSAL SKILLS"},
    { nome: "IMPLICAZIONI LEGALI DELL'ESERCIZIO DELLA PROFESSIONE (LE RESPONSABILITA' DELL'INGEGNERE)", tab: "TRANSVERSAL SKILLS"},
    { nome: "PATENTS AND INTELLECTUAL PROPERTY MANAGEMENT", tab: "TRANSVERSAL SKILLS"},
    { nome: "PERSONALITÀ, TEAM BUILDING, LEADERSHIP", tab: "TRANSVERSAL SKILLS"},
    { nome: "AUTOMATION AND CONTROL IN AUTONOMOUS VEHICLES", tab: "TAB1"},
    { nome: "CONSTRAINED NUMERICAL OPTIMIZATION FOR ESTIMATION AND CONTROL", tab: "TAB1"},
    { nome: "CONTROL OF INDUSTRIAL ROBOTS", tab: "TAB1"},
    { nome: "CONTROL OF MOBILE ROBOTS", tab: "TAB1"},
    { nome: "DATA DRIVEN CONTROL SYSTEM DESIGN", tab: "TAB1"},
    { nome: "NETWORKED CONTROL", tab: "TAB1"},
    { nome: "NONLINEAR CONTROL", tab: "TAB1"},
    { nome: "NUMERICAL ANALYSIS", tab: "TAB1"},
    { nome: "ROBUST CONTROL", tab: "TAB1"},
    { nome: "SAFETY IN AUTOMATION SYSTEMS", tab: "TAB1"},
    { nome: "SYSTEMS THEORY (NONLINEAR DYNAMICS)", tab: "TAB1"},
    { nome: "VIBRATION CONTROL AND DIAGNOSTICS OF MECHANICAL SYSTEMS", tab: "TAB1"},
    { nome: "CONTROL OF INDUSTRIAL AND MOBILE ROBOTS", tab: "TAB1"},
    { nome: "AUTOMATION AND CONTROL IN VEHICLES", tab: "TAB1"},
    { nome: "ADVANCED MEASUREMENT SYSTEMS FOR CONTROL APPLICATIONS", tab: "TAB2"},
    { nome: "ADVANCED PROCESS CONTROL", tab: "TAB2"},
    { nome: "AUTOMATION AND CONTROL IN ELECTRIC AND HYBRID VEHICLES", tab: "TAB2"},
    { nome: "AUTOMATION OF ENERGY SYSTEMS", tab: "TAB2"},
    { nome: "HIGH-TECH ENTREPRENEURSHIP", tab: "TAB2"},
    { nome: "POWER ELECTRONICS AND SUPPLIESP", tab: "TAB2"},
    { nome: "PRODUCTION SYSTEMS CONTROL", tab: "TAB2"},
    { nome: "PROJECT WORK", tab: "TAB2"},
    { nome: "SIMULATION TECHNIQUES AND TOOLS", tab: "TAB2"},
    { nome: "MODELLING AND CONTROL OF ENERGY SYSTEMS (C.I.)", tab: "TAB2"},
    { nome: "ADDITIVE MANUFACTURING", tab: "TAB3"},
    { nome: "ASSET LIFE CYCLE MANAGEMENT", tab: "TAB3"},
    { nome: "COMPLESSITÀ NEI SISTEMI E NELLE RETI", tab: "TAB3"},
    { nome: "ELECTRONIC SYSTEMS", tab: "TAB3"},
    { nome: "ICT FOR CONTROL SYSTEMS ENGINEERING", tab: "TAB3"},
    { nome: "IMAGE ANALYSIS AND COMPUTER VISION", tab: "TAB3"},
    { nome: "MULTIAGENT SYSTEMS", tab: "TAB3"},
    { nome: "OPTICAL MEASUREMENTS", tab: "TAB3"},
    { nome: "POWER ELECTRONICS", tab: "TAB3"},
    { nome: "SISTEMI PER L'AUTOMAZIONE E LA COMUNICAZIONE INDUSTRIALE", tab: "TAB3"},
    { nome: "DISCRETE OPTIMIZATION", tab: "TAB4"},
    { nome: "DYNAMICS AND CONTROL OF CHEMICAL PROCESSES", tab: "TAB4"},
    { nome: "FORMAL METHODS FOR CONCURRENT AND REAL-TIME SYSTEMS (UIC 545)", tab: "TAB4"},
    { nome: "INTERNET OF THINGS", tab: "TAB4"},
    { nome: "MACHINE DESIGN", tab: "TAB4"},
    { nome: "NATURAL RESOURCES MANAGEMENT", tab: "TAB4"},
    { nome: "NONLINEAR OPTIMIZATION", tab: "TAB4"},
    { nome: "PERCEPTION, LOCALIZATION AND MAPPING FOR MOBILE ROBOTS", tab: "TAB4"},
]

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        // overflowX: "visible",
        maxWidth: "80vw",
        marginLeft: "10vw",
        backgroundColor: "transparent"
    },
    tableroot: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
  }));

function Note(props){
    const classes = useStyles();
    const [selezionato, setSelezionato] = React.useState(null);
    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setAppunti(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                Note
            </Typography>

            <div style={{marginTop: "20px", display: "inline-block"}} >
                <Autocomplete
                    id="combo-box-demo"
                    options={corsi}
                    groupBy={(option) => option.tab}
                    getOptionLabel={(option) => option.nome}
                    style={{ width: "90vw" }}
                    onChange={(event, newValue) => {
                        setSelezionato(newValue);
                      }}
                    renderInput={(params) => <TextField {...params} label="Courses" variant="outlined" style={{color:"white"}} />}
                />

                <div style={{height: "20px"}} />

                <Typography variant="h4" component="h5">
                    {selezionato == null ? "" : selezionato.nome.charAt(0) + selezionato.nome.substring(1).toLowerCase()}
                </Typography>
            </div>
        </div>
    )
}

export default Note;