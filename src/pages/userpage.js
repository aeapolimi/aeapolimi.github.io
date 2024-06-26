import React from 'react';
import '../components/PaginaUser.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import * as firebase from "firebase/app";
import 'firebase/firestore';
// import 'firebase/analytics';
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import SEO from "../components/seo"
import { navigate, Link } from "gatsby-plugin-intl"

import CookieConsent from "react-cookie-consent";

import PaginaUser from '../components/PaginaUser';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const firebaseConfig = {
  apiKey: "AIzaSyCN3qF77x39c9RtTO5_s4QMV3lQ589RdZU",
  authDomain: "aeapolimiweb.firebaseapp.com",
  databaseURL: "https://aeapolimiweb.firebaseio.com",
  projectId: "aeapolimiweb",
  storageBucket: "aeapolimiweb.appspot.com",
  messagingSenderId: "252147138104",
  appId: "1:252147138104:web:cc2a953476b0b77f65b0cd",
  measurementId: "G-0D5Z9JD5XH"
};

if (typeof window!== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
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
      newsletter: true,
      editor: false,
    };

    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
          provider: 'microsoft.com',
          fullLabel: 'Microsoft, Polimi, AEA',
        },
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
                    <Typography variant="h4" style={{color:"white", marginBottom: "30px"}}>
                        Join our newsletter!
                    </Typography>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                  </div>
              </div>
              <CookieConsent
                location="bottom"
                buttonText="Ok"
                buttonStyle={{ backgroundColor: "#ef6c00", fontSize: "13px" }}
                cookieName="gatsby-gdpr-google-analytics">
                AEA uses cookies to login. <Link to="/privacypolicy"><b>More</b></Link>
            </CookieConsent>
          </ThemeProvider>
          </>
        );
      }
      else {
        var docref = firebase.firestore().collection("utenti").doc(firebase.auth().currentUser.uid);
        var setAutorizzato = (valore) => {
          this.setState({autorizzato: valore})
        };
        var setPrimogiro = () => {
          this.setState({primogiro: false})
        };
        var setPrimogiroTrue = () => {
          this.setState({primogiro: true});
        };
        var setNewsletter = (valore) => {
          this.setState({newsletter: valore})
        };
        var setEditor = (valore) => {
          this.setState({editor: valore})
        };

        if (this.state.primogiro){
          docref.get().then(function(doc) {
              if (doc.exists) {
                  setAutorizzato(doc.data().autorizzato);
                  setNewsletter(doc.data().newsletter);
                  setEditor(doc.data().editor);
              } else {
                let emailLetta = firebase.auth().currentUser.email;
                let utenteAea = emailLetta.includes("@aeapolimi.it");
                docref.set(
                  {
                    email : emailLetta,
                    autorizzato : utenteAea,
                    newsletter: true,
                    editor: false
                  }
                )
                setAutorizzato(utenteAea);
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
              <PaginaUser 
              utente={firebase.auth().currentUser.displayName}
              autorizzato={this.state.autorizzato}
              setNewsletter={setNewsletter}
              newsletter={this.state.newsletter}
              setPrimogiro={setPrimogiroTrue}
              editor={this.state.editor}
              />
              <CookieConsent
                location="bottom"
                buttonText="Ok"
                buttonStyle={{ backgroundColor: "#ef6c00", fontSize: "13px" }}
                cookieName="gatsby-gdpr-google-analytics">
                AEA uses cookies to login. <Link to="/privacypolicy"><b>More</b></Link>
            </CookieConsent>
          </ThemeProvider>
          </>
        );
      }
    }
  }

export default SignInScreen;