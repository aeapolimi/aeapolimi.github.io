import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link, useIntl, FormattedMessage } from "gatsby-plugin-intl"

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: "75vw",
      margin: "0 auto",
      marginBottom: "20px",
      textAlign: "center",
      borderColor: '#ef6c00',
    },
    title: {
      fontSize: 20,
      marginBottom: "15px"
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
      },
  });


function Event(props){
    const classes = useStyles();
    var codice = props.codice;
    const intl = useIntl();
    return (
        <Card key={props.codice} className={classes.root} variant="outlined" raised={true} >
                <CardMedia
                    className={classes.media}
                    image={props.immagine.includes("http") ? props.immagine : require("../images/news/"+props.immagine)}
                    title={props.titolo}
                />
                <CardContent>
                    <Typography variant="h5" component="h2" style={{minHeight:"80px"}}>
                    {props.titolo}
                    </Typography>
                    <hr/>
                    <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="30px">
                      <Typography variant="h5" className={classes.title}>
                      {props.data.toLocaleString(intl.locale, { month: "long", day: "numeric", year: "numeric" })}
                      </Typography>
                    </Box>
                    <hr/>
                    <Typography variant="body2" component="p" color="textSecondary" className={classes.pos} style={{minHeight:"80px"}}>
                    {props.descrizione}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button component={Link} to={'/articolo/?'+codice} size="small" variant="outlined"  style={{color:"black"}}>
                      <FormattedMessage id="events.read" />
                    </Button>
                </CardActions>
            </Card>
    )
}

export default Event;