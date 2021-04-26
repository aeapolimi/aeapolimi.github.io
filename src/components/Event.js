import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  });


function Event(props){
    const classes = useStyles();
    var codice = props.codice;
    const intl = useIntl();
    return (
        <Card key={props.codice} className={classes.root} variant="outlined" raised={true}>
                <CardMedia
                    className={classes.media}
                    image={props.immagine.includes("http") ? props.immagine : require("../images/news/"+props.immagine)}
                    title={props.titolo}
                />
                <CardContent>
                    <Typography variant="overline" color="textSecondary" gutterBottom>
                      TAG:
                      {
                        props.tag === undefined ?
                        "" :
                          props.tag.map((el) => <Link to={"/tags?"+el} style={{color:"inherit"}}> {el}</Link>)
                      }
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.data.toLocaleString(intl.locale, { month: "long", day: "numeric", year: "numeric" })}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {props.titolo}
                    </Typography>
                    <Typography color="textSecondary">
                      <Link to={"/authors?"+props.autore} style={{color:"inherit"}}>
                        <FormattedMessage id="events.by" /> {props.autore}
                      </Link>
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.pos}>
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