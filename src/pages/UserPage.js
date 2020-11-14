import React from 'react';
import '../components/PaginaUser.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/analytics';
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import SEO from "../components/seo"
import { navigate } from "gatsby-plugin-intl"

import PaginaUser from '../components/PaginaUser';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const firebaseConfig = {
  apiKey: "AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",
  authDomain: "aeapolimiweb.firebaseapp.com",
  databaseURL: "https://aeapolimiweb.firebaseio.com",
  projectId: "aeapolimiweb",
  storageBucket: "aeapolimiweb.appspot.com",
  messagingSenderId: "252147138104",
  appId: "1:252147138104:web:cc2a953476b0b77f65b0cd"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

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
      autorizzato: false,
      primogiro: true,
    };

    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      credentialHelper: 'none',
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      },
      privacyPolicyUrl: function() {
        window.location.assign('https://www.aeapolimi.it/privacypolicy.html');
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

      var docref = firebase.firestore().collection("utenti").doc(firebase.auth().currentUser.uid);
      var setAutorizzato = (valore) => {
        this.setState({autorizzato: valore})
      };
      var setPrimogiro = () => {
        this.setState({primogiro: false})
      };

      if (this.state.primogiro){
        docref.get().then(function(doc) {
            if (doc.exists) {
                setAutorizzato(doc.data().autorizzato);
            } else {
              docref.set(
                {
                  email : firebase.auth().currentUser.email,
                  autorizzato : false
                }
              )
            }
            setPrimogiro();
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
      }
      
      return (
        <>
        <SEO title="Home Socio" />
        <ThemeProvider theme={theme}>
            <PaginaUser utente={firebase.auth().currentUser.displayName} autorizzato={this.state.autorizzato}/>
        </ThemeProvider>
        </>
      );
    }
  }

export default SignInScreen;