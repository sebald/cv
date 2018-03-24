import { propOrEmpty } from './interpolation';

test('prop or empty', () => {
  const fooOrEmpty = propOrEmpty('foo');

  expect(fooOrEmpty({} as any)).toMatchSnapshot();
  expect(fooOrEmpty({ foo: 'bar' } as any)).toMatchSnapshot();
  expect(fooOrEmpty({ notFoo: ':(' } as any)).toMatchSnapshot();
});
