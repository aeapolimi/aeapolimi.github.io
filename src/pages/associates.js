import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

function Associati() {
    const classes = useStyles();
    const intl = useIntl();
    return (
        <>
        <Layout>
            <SEO title="Join Us" description="Join AEA." lang={intl.locale}/>
            <Typography variant="h3" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
              Join us
            </Typography>
            <Typography variant="subtitle1" align="center" style={{marginBottom:"40px"}}>
              <FormattedMessage id="join.about" />
            </Typography>
            <div style={{height:"40px"}}/>
            <div style={{width: "60%", margin: "0 auto"}}>
                <Grid container spacing={9} alignItems="center" justify="center">
                    <Grid item xs={12} sm={6} spacing={3}>
                        <Typography variant="h4" align="center">
                            <FormattedMessage id="join.1.titolo" />
                        </Typography>
                        <Typography variant="body1" align="center">
                            <FormattedMessage id="join.1.descrizione" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} spacing={3}>
                        <Typography variant="h4" align="center">
                            <FormattedMessage id="join.2.titolo" />
                        </Typography>
                        <Typography variant="body1" align="center">
                            <FormattedMessage id="join.2.descrizione" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} spacing={3}>
                        <Typography variant="h4" align="center">
                            <FormattedMessage id="join.3.titolo" />
                        </Typography>
                        <Typography variant="body1" align="center">
                            <FormattedMessage id="join.3.descrizione" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} spacing={3}>
                        <Typography variant="h4" align="center">
                            <FormattedMessage id="join.4.titolo" />
                        </Typography>
                        <Typography variant="body1" align="center">
                            <FormattedMessage id="join.4.descrizione" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} spacing={3}>
                        <Typography variant="h4" align="center">
                            <FormattedMessage id="join.5.titolo" />
                        </Typography>
                        <Typography variant="body1" align="center">
                            <FormattedMessage id="join.5.descrizione" />
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Typography variant="h6" align="center" style={{marginTop:"15%", marginbottom:"10px"}}>
                <FormattedMessage id="join.costo" />
            </Typography>
            <Typography variant="h5" align="center" style={{marginBottom: "20%"}}>
                <FormattedMessage
                        id="join.come"
                        values={{
                        FORM: <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe1Bi7MmR0nVNm4MSEYFLtNZUQ0laTlg1TzVaOUU2V0laOEs2U1MzMllMQi4u" style={{color:"#ef6c00"}}>form</a>,
                        PAYPAL: <a href="https://www.paypal.me/filippoghilotti0?locale.x=en_IT" style={{color:"#ef6c00"}}>PayPal</a>
                    }}
                  />
            </Typography>
        </Layout>
      </>
  );
}

export default Associati;