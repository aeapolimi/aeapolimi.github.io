import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Gatsby
import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    tablecontainer:{
        // overflowX: "visible",
        maxWidth: "80vw",
        marginLeft: "10vw",
    },
    tableroot: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
  }));

function Domande() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        "chi":true,
        "cose": false,
        "legali": false,
        "ingresso":false
    })
    return (
      <>
        <Layout>
            <SEO title="Domande" />
            <TableContainer component={Paper} elevation={0} className={classes.tablecontainer}>
                <Table aria-label="collapsible table">
                    <TableBody>
                        <TableRow className={classes.tableroot}>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setState({ ...state, "chi": !state["chi"] })}>
                                    {state["chi"] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h4" component="h5">
                                    Che cos'è AEA?
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["chi"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">

                                    AEA, acronimo di Automation Engineering Association, è un’associazione studentesca no profit del politecnico di Milano.
                                    Come principale obbiettivo ha quello di promuovere la figura dell’ingegnere dell’automazione, incentivando rapporti di collaborazione e condivisione di interessi tra gli studenti.

                                    </Typography>   
                                </ Collapse>
                            </ TableCell>
                        </TableRow>
                        <TableRow className={classes.tableroot}>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setState({ ...state, "cosa": !state["cosa"] })}>
                                    {state["cosa"] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h4" component="h5">
                                    Cosa fate?
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["cosa"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">

                                    Il nostro progetto è quello di creare una grande community di studenti disposti ad aiutarsi vicendevolmente al fine di rendere più entusiasmante il proprio percorso accademico. 
                                    <br></br>Questo significa affiancare un accrescimento della propria conoscenza in abito ingegneristico ad un arricchimento personale e sociale.
                                    Per fare ciò organizzeremo eventi di diverse tipologie, sia più formali in collaborazione con aziende del settore o ex alunni, sia semplici meeting o aperitivi tra studenti nei quali ognuno potrà raccontare la propria esperienza universitaria (esami a scelta, Erasmus, stages...).
                                    <br></br>Sei ancora indeciso sulla scelta del piano di studi?! Vorresti conoscere qualcuno che ha già fatto un Erasmus e che ti puó dare consigli in merito?! Non preoccuparti, in AEA troverai tutto quello di cui hai bisogno.... e molto altro!
                                    </Typography>   
                                </ Collapse>
                            </ TableCell>
                        </TableRow>
                        <TableRow className={classes.tableroot}>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setState({ ...state, "legali": !state["legali"] })}>
                                    {state["legali"] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h4" component="h5">
                                    Siete in regola?
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["legali"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">

                                        Work in progress...
                                    </Typography>   
                                </ Collapse>
                            </ TableCell>
                        </TableRow>

                        <TableRow className={classes.tableroot}>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setState({ ...state, "ingresso": !state["ingresso"] })}>
                                    {state["ingresso"] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h4" component="h5">
                                    Come faccio ad associarmi?
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["ingresso"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                    Puoi entrare a far parte dell’associazione se sei inscritto ad un qualsiasi corso di laurea, triennale o magistrale, o se sei dottorando presso il Politecnico di Milano.
                                    Per ulteriori informazioni contatta la nostra segreteria all'indirizzo segreteria@aeapolimi.it !

                                    </Typography>   
                                </ Collapse>
                            </ TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
      </>
  );
}

export default Domande;