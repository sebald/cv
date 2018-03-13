import { mount } from 'enzyme';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Baseline } from './Baseline';

test('render default', () => {
  const wrapper = mount(
    <ThemeProvider theme={{ baseline: 24 }}>
      <Baseline />
    </ThemeProvider>
  );
  expect(wrapper).toMatchSnapshot();
});
