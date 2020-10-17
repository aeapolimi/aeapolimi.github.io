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
        "legali": false
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
                                    Chi siamo
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["chi"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        Non lo sappiamo
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
                                    Cosa vogliamo
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["cosa"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        Varie cose
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
                                    Siamo legali
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["legali"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        Insomma
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