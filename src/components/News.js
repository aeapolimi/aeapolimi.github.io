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
    autore:{
      minHeight: "50px"
    },
    date: {
      fontSize: 14,
      minHeight: "40px"
    },
    title: {
      minHeight: "70px"
    },
    pos: {
      marginBottom: 12,
      minHeight: "100px",
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
      marginBottom: "20px"
    },
  });


function News(props){
    const classes = useStyles();
    var codice = props.codice;
    const intl = useIntl();
    return (
        <Card key={props.codice} className={classes.root} variant="outlined" raised={true}>
                <CardContent>
                    <Typography variant="overline" color="textSecondary" >
                      TAG:
                      {
                        props.tag === undefined ?
                        "" :
                          props.tag.map((el) => <Link to={"/tags?"+el} style={{color:"inherit"}}> {el}</Link>)
                      }
                    </Typography>
                    <Typography className={classes.date} color="textSecondary" gutterBottom>
                    {props.data.toLocaleString(intl.locale, { month: "long", day: "numeric", year: "numeric" })}
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={props.immagine.includes("http") ? props.immagine : require("../images/news/"+props.immagine)}
                        title={props.titolo}
                    />
                    <Typography variant="h5" component="h2" className={classes.title}>
                    {props.titolo}
                    </Typography>
                    <Typography color="textSecondary" className={classes.autore}>
                      <Link to={"/authors?"+props.autore} style={{color:"inherit"}}>
                        <FormattedMessage id="insiders.by" /> {props.autore}
                      </Link>
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.pos}>
                    {props.descrizione}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center', minHeight: "50px"}}>
                    <Button component={Link} to={'/articolo/?'+codice} size="small" variant="outlined"  style={{color:"black"}}>
                      <FormattedMessage id="insiders.read" />
                    </Button>
                </CardActions>
            </Card>
    )
}

export default News;