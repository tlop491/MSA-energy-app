
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './App.css'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router';

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#1b1b1b',
      light: '#6d6d6d',
      main: '#424242',
      

    },
    secondary: {
      contrastText: '#000',
      dark: '#bb4d00',
      light: '#ffad42',
      main: '#f57c00',
      

    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <AppRouter />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
