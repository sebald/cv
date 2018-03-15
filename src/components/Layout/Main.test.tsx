import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Main } from './Main';

test('render correctly', () => {
  const wrapper = shallow(<Main theme={theme}>Text</Main>);
  expect(wrapper).toMatchSnapshot();
});
