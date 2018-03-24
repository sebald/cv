import { width } from './width';

test('with mixin', () => {
  expect(width({ width: 0.5 })).toMatchSnapshot();
  expect(width({ width: 0.25 })).toMatchSnapshot();
  expect(width({ width: 1 })).toMatchSnapshot();

  expect(width({ width: 100 })).toMatchSnapshot();
  expect(width({ width: 800 })).toMatchSnapshot();
});
