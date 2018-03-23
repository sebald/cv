import { CSSProperties } from 'react';

import { adjustBaseline, createTypography, px, ratio as r } from '../utils';
import palette from './palette';
import space from './space';
import { TypographyStyle } from './types';

// Rhythm
// ---------------
const ratio = r.perfectFifth;
const baseline = space.baseline;

// Defaults
// ---------------
const htmlFontSize = 16;
const fontSize = 16;
const fontFamily = {
  heading: "'Montserrat', sans-serif;",
  body: "'Raleway', sans-serif;",
};

const headingStyle: CSSProperties = {
  color: palette.grey['900'],
  fontFamily: fontFamily.heading,
};

const typography = createTypography({
  fontSize,
  htmlFontSize,
  ratio,
  baseline: baseline * 2,
});
const adjust = adjustBaseline(baseline);

const baseFontSize = typography(0);

// Styles
// ---------------
export const typeStyles: { [name in TypographyStyle]: CSSProperties } = {
  display: {
    color: palette.grey['700'],
    ...typography(3),
    ...adjust(12),
    ...headingStyle,
    fontWeight: 300,
    letterSpacing: px(-1),
  },
  heading: {
    ...typography(2),
    ...adjust(3),
    ...headingStyle,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  subheading: {
    ...typography(1),
    ...adjust(7),
    ...headingStyle,
    fontWeight: 300,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: baseFontSize.fontSize,
    lineHeight: baseFontSize.fontSize,
    ...adjust(2),
    ...headingStyle,
    color: palette.grey['400'],
    fontWeight: 300,
  },
  body: {
    ...baseFontSize,
    ...adjust(10),
    color: palette.grey['600'],
    fontFamily: fontFamily.body,
    fontWeight: 300,
  },
};

export default {
  htmlFontSize,
  fontFamily,
  ...typeStyles,
};
