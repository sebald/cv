import { mount } from 'enzyme';
import * as React from 'react';

import { Delay } from './Delay';

jest.useFakeTimers();

test('correctly render component', () => {
  const wrapper = mount(<Delay timeout={100} render={() => <div />} />);
  expect(wrapper).toMatchSnapshot('not rendered');

  jest.runAllTimers();
  expect(wrapper).toMatchSnapshot('rendered');
});

test('appear after specifies timeout', () => {
  const spy = jest.fn(() => <div />);
  mount(<Delay timeout={100} render={spy} />);

  expect(spy).not.toHaveBeenCalled();
  jest.runTimersToTime(100);
  expect(spy).toHaveBeenCalled();
});
