import React from 'react';
import GlobalStyle from '../src/components/GlobalStyle';

const Story = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);

export default Story;
