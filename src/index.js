import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { orange500 } from 'material-ui/styles/colors';
import './index.css';
import App from './App/App';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: orange500,
    primary3Color: orange500,
    secondary1Color: orange500,
  },
  fontFamily: 'Roboto, sans-serif',
});
render((
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));
