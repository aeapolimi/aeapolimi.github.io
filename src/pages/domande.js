import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

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

function Domande() {
    const classes = useStyles();
    const intl = useIntl();
    const [state, setState] = React.useState({
        "chi":true,
        "cose": false,
        "legali": false,
        "ingresso":false
    })
    return (
      <>
        <Layout>
            <SEO title="Domande" lang={intl.locale}/>
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
                                    <FormattedMessage id="domande.checosa" />
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["chi"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        <FormattedMessage id="domande.checosatesto" />
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
                                    <FormattedMessage id="domande.cosafate" />
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["cosa"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        <FormattedMessage id="domande.testocosafate.progetto" />
                                        <br/>
                                        <FormattedMessage id="domande.testocosafate.accrescimento" />
                                        <br/>
                                        <FormattedMessage id="domande.testocosafate.pianostudi" />
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
                                <FormattedMessage id="domande.inregola" />
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["legali"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        <FormattedMessage id="domande.testoinregola" />
                                    </Typography>   
                                    {/* <Button variant="contained" color="secondary" startIcon={<GetAppIcon />} style={{margin:"30px", marginLeft:"auto"}}>
                                        <a href="https://www.aeapolimi.it/atto_aea.pdf">Atto Associativo</a>
                                    </Button> */}
                                    <Button variant="contained" color="secondary" startIcon={<GetAppIcon />}>
                                        <a href="https://www.aeapolimi.it/statuto_aea.pdf">Statuto Associativo</a>
                                    </Button>
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
                                <FormattedMessage id="domande.associarmi" />
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["ingresso"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p">
                                        <FormattedMessage id="domande.testoassociarmi" />
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