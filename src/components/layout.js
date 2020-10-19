/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {isSafari, isMobileSafari} from 'react-device-detect';

import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import ElementiDrawer from "../components/ElementiDrawer"

import "./layout.css"

import { navigate } from "gatsby"

const logo = !(isSafari || isMobileSafari) ? require("../images/logobianco.webp") : require("../images/aeatondo.png")

let theme = createMuiTheme({
  palette: {
    primary: { main: '#ef6c00' },
    secondary: { main: '#212121' },
  },
  status: {
    danger: 'orange',
  },
});
theme = responsiveFontSizes(theme);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "black"
    }
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    backgroundColor: "#ef6c00",
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

const Layout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <SwipeableDrawer
              anchor="left"
              open={openDrawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <ElementiDrawer />
          </SwipeableDrawer>
          <AppBar position="static" style={{backgroundColor: "transparent"}} elevation={0}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
              </IconButton>
              <img src={logo} alt="logo" height="64px" onClick={() => navigate("/")}/>
            </Toolbar>
          </AppBar>
        </div>
        <main>{children}</main>
        <AppBar position="fixed" style={{backgroundColor: "black"}} className={classes.appBar} elevation={0}>
          <Toolbar>
              <Typography variant="subtitle2" component="subtitle2">
                  Copyright AEA 2020
              </Typography>
              <div style={{flexGrow: 1}} />
              <Button style={{color:"white"}} size="small" onClick = {() => window.open("https://aeapolimi.github.io/privacypolicy.html")}>Privacy policy</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
