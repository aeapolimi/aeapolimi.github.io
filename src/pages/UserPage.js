import React from 'react';
import '../components/PaginaUser.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import * as firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import SEO from "../components/seo"
import { navigate } from "gatsby"

import PaginaUser from '../components/PaginaUser';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

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

class SignInScreen extends React.Component {

    state = {
      isSignedIn: false,
    };

    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
  
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
    }
  
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }
  
    render() {
      // Se non è stato fatto login
      if (!this.state.isSignedIn) {
        return (
          <>
          <SEO title="Login" />
          <ThemeProvider theme={theme}>
              <div className="sfondo">
                  <AppBar position="fixed" style={{backgroundColor: "transparent"}} elevation={0}>
                      <Toolbar>
                          <IconButton aria-label="home" style={{color:"white"}} onClick = {() => navigate("/")}>
                              <ArrowBackIcon style={{fill: "white"}}/>
                          </IconButton>
                          <Button style={{color:"white"}} onClick = {() => navigate("/")}>Home</Button>
                      </Toolbar>
                  </AppBar>
                  <div className="login">
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                  </div>
              </div>
          </ThemeProvider>
          </>
        );
      }
      return (
        <>
        <SEO title="Home Socio" />
        <ThemeProvider theme={theme}>
            <PaginaUser utente={firebase.auth().currentUser.displayName}/>
        </ThemeProvider>
        </>
      );
    }
  }

export default SignInScreen;