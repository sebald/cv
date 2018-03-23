import { mergeClassNames } from './classnames';

test('merge classnames', () => {
  expect(mergeClassNames('foo', 'bar', undefined)).toMatchSnapshot();
});
