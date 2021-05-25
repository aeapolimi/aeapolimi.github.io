import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import { isSafari, isMobileSafari } from 'react-device-detect';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import SEO from "../components/seo"
import Layout from "../components/layout"

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    actionArea: {
        "&:hover $focusHighlight": {
          opacity: 0,
        },
        '&$focusVisible $focusHighlight': {
            opacity: 0,
          },
      },
    faq:{
        marginBottom: "50px",
    },
    founders:{
        [theme.breakpoints.up('sm')]: {
            width: "55vw",
        },
        margin: "0 auto",
        marginTop: "50px",
        textAlign: "center"
    },
    mediaAvatar: {
        height: 0,
        paddingTop: '75%',
        borderRadius: '50%',
        margin: '28px'
    },
    tablecontainer:{
        // overflowX: "visible",
        [theme.breakpoints.up('sm')]: {
            width: "55vw",
        },
        margin: "0 auto",
        backgroundColor: "transparent",
    },
    tableroot: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
  }));

const isSaf = isMobileSafari || isSafari;

function CardDirettivo(props){
    const classes = useStyles();
    return (
        <Card className="cardTeam" elevation={0} style={{display: 'block', height: "80%", width: "80%", margin: "0 auto", backgroundColor:"transparent"}} >
            <CardActionArea onClick={() => window.open(props.linkedin)} classes={{
                root: classes.actionArea,
                focusVisible: classes.focusVisible,
                focusHighlight: classes.focusHighlight
                }}>
                <CardMedia
                className={classes.mediaAvatar}
                image={props.immagine}
                title={props.nome}
                />
                <CardContent>
                <IconButton style={{width:"100%", display:"flex", justifyContent: "center", marginTop:"-30px" }}><LinkedInIcon style={{fill: "#0072b1"}}/></IconButton>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                    {props.nome}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" component="p" style={{color: props.invisibile ? "transparent" : undefined }}>
                    {props.ruolo}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function Domande() {
    const classes = useStyles();
    const intl = useIntl();
    return (
      <>
        <Layout>
            <SEO title="Domande" lang={intl.locale}/>
            <div className={classes.faq}>
                <Typography variant="h1" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
                        FAQ
                </Typography>
                <TableContainer component={Paper} elevation={0} className={classes.tablecontainer}>
                    <Table aria-label="collapsible table">
                    <TableBody>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        <FormattedMessage id="domande.checosa" />
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 30, paddingTop: 0 }} colSpan={6}>
                                        <Typography variant="p" component="p" align="center">
                                            <FormattedMessage id="domande.checosatesto" />
                                        </Typography> 
                                </ TableCell>
                            </TableRow>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        <FormattedMessage id="domande.cosafate" />
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 30, paddingTop: 0 }} colSpan={6}>
                                        <Typography variant="p" component="p" align="center">
                                            <FormattedMessage id="domande.testocosafate.progetto" />
                                            <br/>
                                            <FormattedMessage id="domande.testocosafate.accrescimento" />
                                            <br/>
                                            <FormattedMessage id="domande.testocosafate.pianostudi" />
                                        </Typography>   
                                </ TableCell>
                            </TableRow>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                    <FormattedMessage id="domande.inregola" />
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 30, paddingTop: 0 }} colSpan={6}>
                                        <Typography variant="p" component="p" align="center">
                                            <FormattedMessage id="domande.testoinregola" />
                                            <a href="https://www.aeapolimi.it/statuto_aea.pdf" style={{color:"#ef6c00"}}> Scarica lo Statuto Associativo</a>
                                        </Typography>   
                                        {/* <Button variant="contained" color="secondary" startIcon={<GetAppIcon />} style={{margin:"30px", marginLeft:"auto"}}>
                                            <a href="https://www.aeapolimi.it/atto_aea.pdf">Atto Associativo</a>
                                        </Button> */}
                                        {/* <Button variant="contained" color="secondary" startIcon={<GetAppIcon />}>
                                            <a href="https://www.aeapolimi.it/statuto_aea.pdf">Statuto Associativo</a>
                                        </Button> */}
                                </ TableCell>
                            </TableRow>

                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                    <FormattedMessage id="domande.associarmi" />
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 30, paddingTop: 0 }} colSpan={6}>
                                        <Typography variant="p" component="p" align="center" style={{marginBottom: "70px"}}>
                                            <FormattedMessage id="domande.testoassociarmi" />
                                        </Typography>   
                                </ TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Typography variant="h1" align="center" style={{marginBottom:"10px", marginTop:"20px"}}>
                    Founders
            </Typography>
            <Typography variant="subtitle1" align="center" style={{marginBottom:"40px", maxWidth: "66vw", margin: "0 auto"}}>
                    Nel lontano settembre 2020 un gruppo di eroi sfidarono una pandemia e molte avversità per inseguire un'idea e cercare di cambiare il mondo. I loro nomi resteranno scritti qui per l'eternità.
            </Typography>
            <div id="founders" className={classes.founders}>
                <TableContainer component={Paper} elevation={0} style={{overflowX: "visible", backgroundColor:"transparent"}}>
                    <Table aria-label="collapsible table">
                        <TableBody>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        Board
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Box margin={1}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        spacing={3}
                                    >
                                        <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        xl={3}
                                        >
                                            <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={!isSaf ? require("../images/direttivo/giulio_vaccari.webp") : require("../images/direttivo/giulio_vaccari.jpeg")} nome="Giulio Vaccari" ruolo="President" invisibile={false}/>
                                        </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        xl={3}
                                        >
                                            <CardDirettivo linkedin="https://www.linkedin.com/in/guido-sassaroli-778548169/" immagine={!isSaf ? require("../images/direttivo/guido_sassaroli.webp") : require("../images/direttivo/guido_sassaroli.jpeg")} nome="Guido Sassaroli" ruolo="Vicepresident" invisibile={false}/>
                                        </Grid>
                                        <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        xl={3}
                                        >
                                            <CardDirettivo linkedin="https://linkedin.com/in/isabella-luppi-006a9b177" immagine={!isSaf ? require("../images/direttivo/isabella_luppi.webp") : require("../images/direttivo/isabella_luppi.jpeg")} nome="Isabella Luppi" ruolo="Secretary" invisibile={false}/>
                                        </Grid>
                                        <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        xl={3}
                                        >
                                            <CardDirettivo linkedin="https://www.linkedin.com/in/sofiatrombini" immagine={!isSaf ? require("../images/direttivo/sofia_trombini.webp") : require("../images/direttivo/sofia_trombini.jpeg")} nome="Sofia Trombini" ruolo="Treasurer" invisibile={false}/>
                                        </Grid>
                                    </Grid>
                                </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        Academic Relations
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                            <Box margin={1}>
                                            <Grid
                                                container
                                                direction="row"
                                                justify="flex-start"
                                                alignItems="center"
                                                spacing={3}
                                            >
                                                <Grid
                                                item
                                                md={6}
                                                xl={3}
                                                xs={12}
                                                >
                                                    <CardDirettivo linkedin="https://www.linkedin.com/in/roberto-pellerito-b8b99319a" immagine={!isSaf ? require("../images/direttivo/roberto_pellerito.webp") : require("../images/direttivo/roberto_pellerito.jpeg")} nome="Roberto Pellerito" ruolo="Team leader" invisibile={false}/>
                                                </Grid>
                                                <Grid
                                                item
                                                md={6}
                                                xl={3}
                                                xs={12}
                                                >
                                                    <CardDirettivo linkedin="https://www.linkedin.com/in/pasqualecortese1994" immagine={!isSaf ? require("../images/direttivo/pasquale_cortese.webp") : require("../images/direttivo/pasquale_cortese.jpeg")} nome="Pasquale Cortese" ruolo="Co-founder" invisibile={true}/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        Company Relations
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Box margin={1}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/davide-zanatta-207b12174" immagine={!isSaf ? require("../images/direttivo/davide_zanatta.webp") : require("../images/direttivo/davide_zanatta.jpeg")} nome="Davide Zanatta" ruolo="Team leader" invisibile={false}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/leonardo-bertelli-20a34816a" immagine={!isSaf ? require("../images/direttivo/leonardo_bertelli.webp") : require("../images/direttivo/leonardo_bertelli.jpeg")} nome="Leonardo Bertelli" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/pietro-dardano-41016320" immagine={!isSaf ? require("../images/direttivo/pietro_dardano.webp") : require("../images/direttivo/pietro_dardano.jpeg")} nome="Pietro Dardano" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/matteo-sacchetti-92b95218a" immagine={!isSaf ? require("../images/direttivo/matteo_sacchetti.webp") : require("../images/direttivo/matteo_sacchetti.jpeg")} nome="Matteo Sacchetti" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        Contents
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Box margin={1}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="center"
                                            spacing={3}
                                        >
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/pietro-bosoni-4817291b8/" immagine={!isSaf ? require("../images/direttivo/pietro_bosoni.webp") : require("../images/direttivo/pietro_bosoni.jpeg")} nome="Pietro Bosoni" ruolo="Team leader" invisibile={false}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/giovanni-ploner-703b25187/" immagine={!isSaf ? require("../images/direttivo/giovanni_ploner.webp") : require("../images/direttivo/giovanni_ploner.jpeg")} nome="Giovanni Ploner" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TableCell>
                            </TableRow>

                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        DevOps
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Box margin={1}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="center"
                                            spacing={3}
                                        >
                                            <Grid
                                            item
                                            xl={3}
                                            sm={6}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/giovanni-cherubini-1690201a7/" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Giovanni Cherubini" ruolo="Team leader" invisibile={false}/>
                                            </Grid>

                                            <Grid
                                            item
                                            xl={3}
                                            sm={6}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Andrea Archetti" ruolo="Co-Founder" invisibile={true}/>
                                            </Grid>
                                            <Grid
                                            item
                                            xl={3}
                                            sm={6}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Gabriele Liuzzo" ruolo="Co-Founder" invisibile={true}/>
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </TableCell>
                            </TableRow>

                            <TableRow className={classes.tableroot}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h5" align="center">
                                        Events
                                    </Typography>       
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Box margin={1}>
                                        <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        spacing={3}
                                        >
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/gariboldicristian" immagine={!isSaf ? require("../images/direttivo/cristian_gariboldi.webp") : require("../images/direttivo/cristian_gariboldi.jpeg")} nome="Cristian Gariboldi" ruolo="Team leader" invisibile={false}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/filippo-tallon-9a9b331b8/" immagine={!isSaf ? require("../images/direttivo/filippo_tallon.webp") : require("../images/direttivo/filippo_tallon.jpeg")} nome="Filippo Tallon" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/elena-bastianelli-a58222197" immagine={!isSaf ? require("../images/direttivo/elena_bastianelli.webp") : require("../images/direttivo/elena_bastianelli.jpeg")} nome="Elena Bastianelli" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                            <Grid
                                            item
                                            md={6}
                                            xl={3}
                                            xs={12}
                                            >
                                                <CardDirettivo linkedin="https://www.linkedin.com/in/giuliovaccari/" immagine={!isSaf ? require("../images/direttivo/icona_persona.webp") : require("../images/direttivo/icona_persona.png")} nome="Giovanni Buzzao" ruolo="Co-founder" invisibile={true}/>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Layout>
      </>
  );
}

export default Domande;