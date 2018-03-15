import * as React from 'react';

import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export function shallowWithTheme<P>(node: React.ReactElement<P>, theme: any) {
  const context = (shallow(
    <ThemeProvider theme={theme} />
  ).instance() as any).getChildContext();
  return shallow(node, { context });
}
