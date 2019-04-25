import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components';

export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
}
