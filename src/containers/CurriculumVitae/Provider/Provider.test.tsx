import { mount } from 'enzyme';
import * as React from 'react';

import { CvConsumer, CvProvider } from './Provider';

test('render provider', () => {
  const wrapper = mount(<CvProvider cv={{} as any}>child</CvProvider>);
  expect(wrapper).toMatchSnapshot();
});

test('render consumer', () => {
  const spy = jest.fn(() => <div />);
  mount(
    <CvProvider cv={{ foo: 'bar' } as any}>
      <div>
        <CvConsumer>{spy}</CvConsumer>
      </div>
    </CvProvider>
  );

  expect(spy.mock.calls).toMatchSnapshot();
});
