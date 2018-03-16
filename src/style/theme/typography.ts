import { CSSProperties } from 'react';

import { adjustBaseline, createTypography, px, ratio as r } from '../utils';
import palette from './palette';
import space from './space';
import { TypographyStyles } from './types';

// Rhythm
// ---------------
const ratio = r.perfectFifth;
const baseline = space.baseline * 2;

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
  fontWeight: 600,
};

const typography = createTypography({
  fontSize,
  htmlFontSize,
  ratio,
  baseline,
});
const adjust = adjustBaseline(baseline);

// Styles
// ---------------
export const typeStyles: { [name in TypographyStyles]: CSSProperties } = {
  display: {
    ...typography(3),
    ...adjust(12),
    ...headingStyle,
    letterSpacing: px(-1),
  },
  heading: {
    ...typography(2),
    ...adjust(4),
    ...headingStyle,
    textTransform: 'uppercase',
  },
  subheading: {
    ...typography(1),
    ...adjust(7),
    ...headingStyle,
    textTransform: 'uppercase',
  },
  caption: {
    ...typography(0),
    ...adjust(10),
    ...headingStyle,
    color: palette.grey['500'],
    fontWeight: 300,
  },
  body: {
    ...typography(0),
    ...adjust(10),
    color: palette.grey['800'],
    fontFamily: fontFamily.body,
    fontWeight: 300,
  },
};

export default {
  htmlFontSize,
  fontFamily,
  ...typeStyles,
};
