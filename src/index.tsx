import * as React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { CvProvider } from './containers/CurriculumVitae';

import { cv } from './data';
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
    background: ${theme.background.body};
  }

  path {
    fill: currentColor;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <CvProvider cv={cv}>
      <App />
    </CvProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
