import theme from '../theme';
import {
  fontWeight,
  getHtmlFontSize,
  textAlign,
  textTransform,
  typography,
} from './typography';

test('get html font size', () => {
  expect(getHtmlFontSize({ theme })).toMatchSnapshot();
});

test('typography', () => {
  expect(typography('body')({ theme })).toMatchSnapshot();
  expect(typography('caption')({ theme })).toMatchSnapshot();
});

test('fontWeight', () => {
  expect(fontWeight({ fontWeight: 200 } as any));
  expect(fontWeight({} as any));
});

test('textAlign', () => {
  expect(textAlign({ textAlign: 'center' } as any));
  expect(textAlign({} as any));
});

test('textTransform', () => {
  expect(textTransform({ textTransform: 'uppercase' } as any));
  expect(textTransform({} as any));
});
