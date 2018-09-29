import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { deepOrange400, orange500, deepOrange100, grey400, grey300, grey500, orange600, yellow100 } from 'material-ui/styles/colors';
import './index.css';
import App from './App/App';
import { blue100 } from 'material-ui/styles/colors';
import { red100 } from 'material-ui/styles/colors';
import { blue200 } from 'material-ui/styles/colors';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: blue100,
    primary3Color: yellow100,
    secondary1Color: blue200,
  }
});
render((
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));

<App/>