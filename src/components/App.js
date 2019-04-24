import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../state/store';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import CharityDonationsContainer from '../containers/CharityDonationsContainer';
import { GlobalStyle } from '.';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <CharityDonationsContainer />
      </React.Fragment>
    </ThemeProvider>
  </Provider>
);

export default App;
