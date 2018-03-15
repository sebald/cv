import * as React from 'react';

import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import * as style from './style';

export function shallowWithTheme<P>(
  node: React.ReactElement<P>,
  theme: any = style.theme
) {
  const context = (shallow(
    <ThemeProvider theme={theme} />
  ).instance() as any).getChildContext();
  return shallow(node, { context });
}
