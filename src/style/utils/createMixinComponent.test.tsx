import { mount } from 'enzyme';
import * as React from 'react';

import { StyledMixin } from '../theme';
import { createMixinComponent } from './createMixinComponent';

const mixinStatic = () => ({ fontSize: 'normal' });
const mixinDynamic: StyledMixin<{ width: number }> = ({ width }) => ({
  width: `${width}px`,
});

const Child: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className} />
);

test('create a mixin component', () => {
  const Mixin = createMixinComponent(mixinStatic);
  const wrapper = mount(
    <Mixin>
      <Child />
    </Mixin>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Child)).toHaveStyleRule('font-size', 'normal');
});

test('merge classnames', () => {
  const Mixin = createMixinComponent(mixinStatic);
  const wrapper = mount(
    <Mixin className="custom-name">
      <Child />
    </Mixin>
  );

  expect(wrapper).toMatchSnapshot();
});

test('create a dynamic mixin component', () => {
  const Mixin = createMixinComponent(mixinDynamic);
  const wrapper = mount(
    <Mixin width={100}>
      <Child />
    </Mixin>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Child)).toHaveStyleRule('width', '100px');
});

test('multiple mixins', () => {
  const Mixin = createMixinComponent(mixinStatic, mixinDynamic);
  const wrapper = mount(
    <Mixin width={55}>
      <Child />
    </Mixin>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Child)).toHaveStyleRule('font-size', 'normal');
  expect(wrapper.find(Child)).toHaveStyleRule('width', '55px');
});

test('apply to all children', () => {
  const Mixin = createMixinComponent(mixinStatic);
  const wrapper = mount(
    <Mixin>
      <Child />
      <div />
      <span />
    </Mixin>
  );
  expect(wrapper).toMatchSnapshot();
});
