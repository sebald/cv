import { ensurePx, px, pxToRem, remToPx } from './utils';

test('px', () => {
  expect(px(16)).toMatchSnapshot();
  expect(px(1)).toMatchSnapshot();
  expect(px(24)).toMatchSnapshot();
  expect(px(0)).toMatchSnapshot();
});

test('px to rem (using base font size)', () => {
  expect(pxToRem(16)).toMatchSnapshot();
  expect(pxToRem(1)).toMatchSnapshot();
  expect(pxToRem(20)).toMatchSnapshot();
  expect(pxToRem(0)).toMatchSnapshot();
});

test('px to rem (custom base font size)', () => {
  expect(pxToRem(16, 10)).toMatchSnapshot();
  expect(pxToRem(1, 10)).toMatchSnapshot();
  expect(pxToRem(20, 20)).toMatchSnapshot();
});

test('rem to px (using base font size)', () => {
  expect(remToPx('1rem')).toMatchSnapshot();
  expect(remToPx('1.25rem')).toMatchSnapshot();
  expect(remToPx('0.75rem')).toMatchSnapshot();
  expect(remToPx('0rem')).toMatchSnapshot();
});

test('rem to px (custom base font size)', () => {
  expect(remToPx('1rem', 12)).toMatchSnapshot();
  expect(remToPx('1.25rem', 10)).toMatchSnapshot();
  expect(remToPx('0.75rem', 16)).toMatchSnapshot();
  expect(remToPx('0rem', 10)).toMatchSnapshot();
});

test('ensure value is px (using base font size)', () => {
  expect(ensurePx(16)).toMatchSnapshot();
  expect(ensurePx('1rem')).toMatchSnapshot();
  expect(ensurePx(24)).toMatchSnapshot();
  expect(ensurePx('1.25rem')).toMatchSnapshot();
});

test('ensure value is px (custom base font size)', () => {
  expect(ensurePx(16, 10)).toMatchSnapshot();
  expect(ensurePx('1rem', 20)).toMatchSnapshot();
  expect(ensurePx(20, 12)).toMatchSnapshot();
  expect(ensurePx('1.25rem', 30)).toMatchSnapshot();
});
