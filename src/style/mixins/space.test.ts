import { theme } from '..';
import { baseline, padding } from './space';

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
