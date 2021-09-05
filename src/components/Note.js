import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

import { FormattedMessage } from "gatsby-plugin-intl"

import * as firebase from "firebase/app";

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

const corsi = [
    { nome: "TIROCINIO (INGEGNERIA DELL'AUTOMAZIONE)", tab: "TERZO ANNO"},
    { nome: "BASI DI DATI 1", tab: "TERZO ANNO"},
    { nome: "CALCOLO DELLE PROBABILITÀ E STATISTICA", tab: "TERZO ANNO"},
    { nome: "CHIMICA GENERALE", tab: "TERZO ANNO"},
    { nome: "ONDE ELETTROMAGNETICHE E MEZZI TRASMISSIVI", tab: "TERZO ANNO"},
    { nome: "ELEMENTI DI ANALISI FUNZIONALE E TRASFORMATE", tab: "TERZO ANNO"},
    { nome: "FONDAMENTI DI RICERCA OPERATIVA", tab: "TERZO ANNO"},
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
    const [original_topics, setoriginal_topics] = React.useState(0);
    const [original_material, setoriginal_material] = React.useState(0);
    const [original_hands, setoriginal_hands] = React.useState(0);
    const [original_exam, setoriginal_exam] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const [material, setMaterial] = React.useState(0);
    const [hands, setHands] = React.useState(0);
    const [exam, setExam] = React.useState(0);
    const [n_ratings, setNratings] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [open, setOpen] = React.useState(false);
    const [UIds, setUIds] = React.useState(null);
    const [recensioni, setRecensioni] = React.useState([]);
    const [recensioneutente, setRecensioneUtente] = React.useState([]);
    React.useEffect(() => {
        if (selezionato != null){
            firebase.firestore().collection("note").doc(selezionato.nome).get()
            .then(collec => {
                if (!collec.exists){
                    setValue(0)
                    setoriginal_topics(0)
                    setExam(0)
                    setoriginal_exam(0)
                    setHands(0)
                    setoriginal_hands(0)
                    setMaterial(0)
                    setoriginal_material(0)
                    setNratings(0)
                    setUIds(null)
                    setRecensioni([])
                }
                else{
                    setValue(collec.data().topics)
                    setoriginal_topics(collec.data().topics)
                    setExam(collec.data().exam)
                    setoriginal_exam(collec.data().exam)
                    setHands(collec.data().hands)
                    setoriginal_hands(collec.data().hands)
                    setMaterial(collec.data().material)
                    setoriginal_material(collec.data().material)
                    setNratings(collec.data().n_ratings)
                    setUIds(collec.data().uids)
                    setRecensioni(collec.data().recensioni)
                    if (recensioni[firebase.auth().currentUser.uid]){
                        setRecensioneUtente(recensioni[firebase.auth().currentUser.uid])
                    }
                }
            })
        }
    }, [selezionato]);
    var salva = () => {
        var userid = firebase.auth().currentUser.uid
        var already_voted = UIds ? UIds.includes(userid) : false
        var array_ids = UIds.slice()
        var docref = firebase.firestore().collection("note").doc(selezionato.nome);
        array_ids.push(userid)
        // Giochino per poter modificare un voto già inviato considerando solo le medie
        var new_n_ratings = already_voted ? n_ratings : n_ratings + 1
        var n_ratings_if_voted = already_voted ? n_ratings - 1 : n_ratings
        var new_recensioni = recensioni
        if (already_voted){
            new_recensioni[userid] = recensioneutente
        }
        docref.set(
                {
                    topics : (original_topics*n_ratings_if_voted + value) / new_n_ratings,
                    exam : (original_exam*n_ratings_if_voted + exam) / new_n_ratings,
                    hands : (original_hands*n_ratings_if_voted + hands) / new_n_ratings,
                    material : (original_material*n_ratings_if_voted + material) / new_n_ratings,
                    n_ratings : new_n_ratings,
                    uids : already_voted ? UIds : array_ids,
                    recensioni: new_recensioni,
                }, { merge: true }
            )
        .catch(function(error) {
            console.log("Error getting document:", error);
        });
        if (!already_voted){
            setUIds(array_ids)
        }
        setOpen(true)
    }
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
                    onChange={(event, newValue) => {
                        setSelezionato(newValue);
                      }}
                    style={{backgroundColor:"#c56000", width: "600px"}}
                    renderInput={(params) => <TextField {...params} label="Courses" variant="outlined" style={{color:"white"}} />}
                />

                <div style={{height: "20px"}} />

                {UIds ? UIds.includes(firebase.auth().currentUser.uid) ? "You have already voted." : "" : ""}

                <TableContainer component={Paper} style={{backgroundColor:"#c56000", color:"white", maxWidth: "600px"}}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell component="center" scope="row">{selezionato == null ? "" : selezionato.nome.charAt(0) + selezionato.nome.substring(1).toLowerCase()}</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="topics">
                                <TableCell component="center" scope="row">Topics</TableCell>
                                <TableCell align="center"><Rating
                                    name="topics"
                                    value={value}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    // onChangeActive={(event, newHover) => {
                                    // setHover(newHover);
                                    // }}
                                /></TableCell>
                                <TableCell align="center">{value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}</TableCell>
                            </TableRow>
                            <TableRow key="exam">
                                <TableCell component="center" scope="row">Exam</TableCell>
                                <TableCell align="center"><Rating
                                    name="exam"
                                    value={exam}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setExam(newValue);
                                    }}
                                    // onChangeActive={(event, newHover) => {
                                    // setHover(newHover);
                                    // }}
                                /></TableCell>
                                <TableCell align="center">{value !== null && <Box ml={2}>{labels[exam]}</Box>}</TableCell>
                            </TableRow>
                            <TableRow key="handson">
                                <TableCell component="center" scope="row">Hands-on experience</TableCell>
                                <TableCell align="center"><Rating
                                    name="handson"
                                    value={hands}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setHands(newValue);
                                    }}
                                    // onChangeActive={(event, newHover) => {
                                    // setHover(newHover);
                                    // }}
                                /></TableCell>
                                <TableCell align="center">{value !== null && <Box ml={2}>{labels[hands]}</Box>}</TableCell>
                            </TableRow>
                            <TableRow key="material">
                                <TableCell component="center" scope="row">Given material</TableCell>
                                <TableCell align="center"><Rating
                                    name="material"
                                    value={material}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setMaterial(newValue);
                                    }}
                                    // onChangeActive={(event, newHover) => {
                                    //     setHover(newHover);
                                    // }}
                                /></TableCell>
                                <TableCell align="center">{value !== null && <Box ml={2}>{labels[material]}</Box>}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Paper style={{backgroundColor:"#c56000", minHeight: "50px", marginTop:"20px"}}>
                    <Typography variant="h5" component="h6">
                        Reviews
                    </Typography>
                </Paper>
                {Object.values(recensioni).map(recensione => 
                    <>
                        <div style={{height:"20px", position: "absolute", top: "50%", transform: "translateY(-50%)"}} />
                        <Paper style={{backgroundColor:"#c56000", minHeight: "50px", maxWidth: "600px"}}>
                            <Typography variant="body1" component="body1" style={{ wordWrap: "break-word" }} align="left">
                                {recensione}
                            </Typography>
                        </Paper>
                    </>
                )}
                <Paper style={{marginTop:"20px", backgroundColor:"#c56000"}}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Write a review</InputLabel>
                        <OutlinedInput
                            multiline
                            id="outlined-adornment-amount"
                            value={recensioneutente}
                            onChange={(event) => setRecensioneUtente(event.target.value)}
                            labelWidth={120}
                        />
                    </FormControl>
                </Paper>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon/>}
                    onClick={() => salva()}
                    style={{marginTop: "20px"}}
                >
                    Send
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="Sent"
                action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={() => setOpen(false)}>
                        Ok
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    )
}

export default Note;