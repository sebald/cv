import { theme } from '..';
import { baseline, padding, space } from './space';

test('basline', () => {
  expect(baseline({ theme })).toMatchSnapshot();
});

test('padding', () => {
  expect(padding(1)({ theme })).toMatchSnapshot();
  expect(padding(1, 1, 1, 1)({ theme })).toMatchSnapshot();
  expect(padding(1, 2)({ theme })).toMatchSnapshot();
  expect(padding(1, 1, 2)({ theme })).toMatchSnapshot();
  expect(padding(1, 1, 2, 3)({ theme })).toMatchSnapshot();
});

test('spacing', () => {
  expect(space({ theme })).toEqual({});

  expect(space({ theme, mx: 1 })).toMatchSnapshot();
  expect(space({ theme, my: 1 })).toMatchSnapshot();
  expect(space({ theme, mx: 2, my: 1 })).toMatchSnapshot();
  expect(space({ theme, m: 2 })).toMatchSnapshot();
  expect(space({ theme, mx: 1, m: 2 })).toMatchSnapshot();
  expect(space({ theme, mx: 1, m: 3, my: 2 })).toMatchSnapshot();
});
