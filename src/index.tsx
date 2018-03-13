import * as React from 'react';
import { render } from 'react-dom';

import { BaselineGrid } from './components/Baseline';
import { injectGlobal } from './style';

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
  <div>
    <h1>Hello there!</h1>
    <BaselineGrid />
  </div>,
  document.getElementById('root')
);
