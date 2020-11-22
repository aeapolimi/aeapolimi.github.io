import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { FormattedMessage } from "gatsby-plugin-intl"

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
    const [state, setState] = React.useState({
        "automazione":false,
    })
    return (
        <div style={{marginTop: "20px"}}>
            <IconButton aria-label="home" style={{color:"white"}} onClick = {() => props.setAppunti(false)}>
                <HomeIcon style={{fill: "white"}}/>
            </IconButton>
            <Typography variant="h4" component="h5">
                Note
            </Typography>

            <div style={{height: "20px"}} />
            <TableContainer component={Paper} elevation={0} className={classes.tablecontainer}>
                <Table aria-label="collapsible table">
                    <TableBody>
                        <TableRow className={classes.tableroot}>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setState({ ...state, "automazione": !state["automazione"] })}>
                                    {state["automazione"] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h4" component="h5" style={{color:"white"}}>
                                    Automazione
                                </Typography>       
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={state["automazione"]} timeout="auto" unmountOnExit>
                                    <Typography variant="p" component="p" style={{color:"white"}}>
                                        <FormattedMessage id="note.automazione" />
                                    </Typography>   
                                </ Collapse>
                            </ TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Note;