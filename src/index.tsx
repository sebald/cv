import * as React from 'react';
import { render } from 'react-dom';

import { BaselineGrid } from './components/Baseline';
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
    <>
      <h1>Hello there!</h1>
      <BaselineGrid />
    </>
  </ThemeProvider>,
  document.getElementById('root')
);
