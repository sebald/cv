import { htmlFontSize, ratio } from './constants';
import {
  adjustBaseline,
  createScale,
  createTypography,
  getLineHeight,
} from './typography';

test('scale', () => {
  const scale = createScale({
    fontSize: 16,
    htmlFontSize,
    ratio: ratio.perfectFourth,
  });

  expect(scale(1)).toMatchSnapshot();
  expect(scale(2)).toMatchSnapshot();
  expect(scale(3)).toMatchSnapshot();

  expect(scale(0)).toMatchSnapshot();
  expect(scale(-1)).toMatchSnapshot();
});

test('scale (custom)', () => {
  const scale = createScale({
    fontSize: 20,
    htmlFontSize,
    ratio: ratio.goldenRatio,
  });

  expect(scale(1)).toMatchSnapshot();
  expect(scale(2)).toMatchSnapshot();
  expect(scale(3)).toMatchSnapshot();

  expect(scale(0)).toMatchSnapshot();
  expect(scale(-1)).toMatchSnapshot();
});

test('line height', () => {
  expect(
    getLineHeight({ fontSize: '1rem', baseline: 20, htmlFontSize })
  ).toMatchSnapshot();
  expect(
    getLineHeight({ fontSize: 16, baseline: 20, htmlFontSize })
  ).toMatchSnapshot();
  expect(
    getLineHeight({ fontSize: '1rem', baseline: 30, htmlFontSize: 20 })
  ).toMatchSnapshot();

  expect(
    getLineHeight({ fontSize: 20, baseline: 20, htmlFontSize })
  ).toMatchSnapshot();
  expect(
    getLineHeight({ fontSize: 22, baseline: 20, htmlFontSize })
  ).toMatchSnapshot();
});

test('typography', () => {
  const typography = createTypography({
    fontSize: 16,
    baseline: 20,
    htmlFontSize,
    ratio: ratio.goldenRatio,
  });

  expect(typography(0)).toMatchSnapshot();
  expect(typography(1)).toMatchSnapshot();
  expect(typography(2)).toMatchSnapshot();
  expect(typography(-1)).toMatchSnapshot();
});

test('adjust', () => {
  const a1 = adjustBaseline(20);
  expect(a1(5));
  expect(a1(5, 1));

  const a2 = adjustBaseline(12);
  expect(a2(0));
  expect(a2(0, 2));
});
