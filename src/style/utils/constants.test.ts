import { htmlFontSize, ratio } from './constants';

test('base font size', () => {
  expect(htmlFontSize).toMatchSnapshot();
});

test('available ratios', () => {
  expect(ratio).toMatchSnapshot();
});
