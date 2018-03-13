import * as React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { injectGlobal, theme, ThemeProvider } from './style';

injectGlobal`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
