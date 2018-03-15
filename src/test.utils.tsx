import * as React from 'react';

import { mount, shallow } from 'enzyme';
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

export function mountWithTheme<P>(
  node: React.ReactElement<P>,
  theme: any = style.theme
) {
  return mount(<ThemeProvider theme={theme}>{node}</ThemeProvider>)
    .children()
    .first();
}
