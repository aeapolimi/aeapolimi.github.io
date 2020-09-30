import React from 'react';
import './App.css';

// Import dei vari material-ui
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';


// I miei component
import HomePage from '../components/HomePage';

// Gatsby
import SEO from "../components/seo"

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


function App() {
  // L'equivalente del main
  return (
      <div>
        <SEO title="Home" />
        <ThemeProvider theme={theme}>
          <HomePage/>
        </ThemeProvider>
      </div>
  );
}

export default App;