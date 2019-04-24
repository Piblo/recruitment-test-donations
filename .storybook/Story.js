import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../src/components';

const Story = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

export default Story;
