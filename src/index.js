import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContainer} from 'react-hot-loader';
import ApolloClientWrapper from './ApolloClientWrapper';
import registerServiceWorker from './registerServiceWorker';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import yellow from  '@material-ui/core/colors/yellow';
import grey from  '@material-ui/core/colors/grey';

import {Query, Mutation} from 'react-apollo';

import {
  GET_THEME_STATE,
} from './query';

const getTheme = (theme) => {
  return createMuiTheme({
    palette: {
      type: theme.paletteType,
      primary1Color: '#2f2f4b',
      background: {
        default: theme.paletteType === 'light' ? '#fff' : '#212234',
      },
    },
    typography: {
      fontFamily: '"Poppins", Arial, Verdana, sans-serif',
      'display2': {
        fontSize: '35px',
        fontWeight: '900',
        letterSpacing: '0.3px',
        color: 'white',
        margin: '0px 0px 22px',
        background: 'linear-gradient(to right, rgb(29, 212, 202), rgb(97, 100, 250)) text',
        background: `linear-gradient(to right, #30CFD0 0%, #330867 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
      },
      'display1': {
        fontSize: '35px',
        fontWeight: '900',
        letterSpacing: '0.3px',
        color: theme.paletteType === 'light' ? 'rgb(64, 79, 119)' : 'white',
        margin: '0px 0px 22px',
      },
      'headline': {
        background: 'linear-gradient(to right, rgb(29, 212, 202), rgb(97, 100, 250)) text',
        background: `linear-gradient(to right, #30CFD0 0%, #330867 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
        textAlign: 'center',
      },
      title: {
        fontSize: '35px',
        fontWeight: 900,
        letterSpacing: '0.3px',
        color: 'white',
        margin: '0px 0px 22px',
      },
      'subheading': {
        fontSize: '20px',
        fontWeight: 900,
        letterSpacing: '1.07px',
        color: 'white',
        margin: '4px 0 16px',
      },
      body1: {
      	color: theme.paletteType === 'light' ? grey[800] : '#AFC3DF',
        fontWeight: 700,
        lineHeight: 1.8,
        letterSpacing: '0.6px',
      	fontSize: '1.175rem',
      },
      body2: {
        color: theme.paletteType === 'light' ? grey[800] : '#AFC3DF',
        fontWeight: 700,
        lineHeight: 1.75,
        letterSpacing: '1.28px',
      	fontSize: '0.975rem',
      },
      caption: {
        color: '#738EE6',
        fontWeight: 700,
        fontFamily: '"Poppins", Arial, Verdana, sans-serif',
        textTransform: 'uppercase',
        textAlign: 'center',
      },

    },
    overrides: {
      MuiChip: {
        root: {
          background: 'linear-gradient(180deg, #293464 0%, #1D345C 100%)',
          boxShadow: '0 40px 64px 0 rgba(35, 26, 63, 0.18)',
        },
      },
      MuiPaper: {
        root: {
          flex: 1,
          order: 1,
          // background: 'linear-gradient(225deg, #2C3567, #1B355A)',
          padding: '20px 30px',
          position: 'relative',
        },
        elevation0: {
          background: 'linear-gradient(180deg, #293464 0%, #1D345C 100%)',
          boxShadow: '0 40px 64px 0 rgba(35, 26, 63, 0.18)',
        },
        elevation1: {
          background: 'linear-gradient(225deg, #2C3567, #1B355A)',
          boxShadow: '0 24px 80px 0 rgba(16, 22, 40, 0.24)',
        },
        rounded: {
          borderRadius: 15,
        },
      },
      MuiAppBar: {
        colorPrimary: {
          color: 'white',
          height: 115,
          background: 'none',
          backgroundColor: 'none',
          boxShadow: 'none',
        },
        colorSecondary: {
          backgroundColor: 'none',
          background: 'linear-gradient(rgb(19, 28, 56) 0%, rgba(19, 28, 56, 0.9) 50%, rgba(19, 28, 56, 0) 100%);',
          height: 50,
          boxShadow: 'none',
          color: grey[500],
          fontWeight: '500px',
        },
        root: {

        },
      },
      MuiToolbar: {
        root: {
          margin: 100,
        },
      },
      MuiTab: {
        root: {
          color: 'white',
        },
      },
      MuiToolbar: {
        root: {
          // maxWidth: 1200,
          // minWidth: 1200,
          margin: '0 auto',
        },
      },
      MuiDrawer: {
        paper: {
          color: '#bbbacb',
          backgroundColor: '#242439',
        },
        paperAnchorDockedLeft: {
          borderRight: '0px',
        },
      },
      MuiButton: {
        /* root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },*/
        text: {
          fontFamily: '\'Lato\', \'sans-serif\'',
          fontSize: '0.975rem',
          fontWeight: 700,
          textTransform: 'none',
          color: theme.paletteType === 'light' ? 'rgb(64, 79, 119)' : 'white',
        },
        containedPrimary: {
          height: 41,
          lineHeight: '41px',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 30,
          border: 0,
          color: 'white',
          padding: '0 30px',
          fontFamily: '\'Lato\', \'sans-serif\'',
          fontWeight: 700,
        },
        containedSecondary: {
          height: 41,
          lineHeight: '41px',
          background: 'linear-gradient(30deg, #458DFF, #01E7CF)',
          borderRadius: 30,
          border: 0,
          color: 'white',
          padding: '0 30px',
          fontFamily: '\'Lato\', \'sans-serif\'',
          fontWeight: 700,
        },
      },
      MuiListItem: {
        button: {
          '&:hover': {
            // backgroundColor: 'rgb(0,0,0,0)',
          },
        },
      },
    },
  });
};

const theme = getTheme({
  paletteType: 'dark',
});

ReactDOM.render(
  <AppContainer>
    <ApolloClientWrapper>
      <CssBaseline>
        <Query query={GET_THEME_STATE}>
          {({data, error}) => (
            <MuiThemeProvider theme={getTheme({paletteType: data.themeState.palette})}>
              <App />
            </MuiThemeProvider>
          )}
        </Query>
      </CssBaseline>
    </ApolloClientWrapper>
  </AppContainer>, document.getElementById('root'));
registerServiceWorker();
