import * as React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { LanguageProvider } from './components/Language';
import { CvProvider } from './containers/CurriculumVitae';

import { info } from './console';
import { cv } from './data';
import { injectGlobal, theme, ThemeProvider } from './style';

info();

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

  @page {
    size: A4;
    margin: 1cm 2cm;
  }

  @media print{
    html {
      font-size: 80%;
    }
  }
`;

render(
  <ThemeProvider theme={theme}>
    <LanguageProvider>
      <CvProvider cv={cv}>
        <App />
      </CvProvider>
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
