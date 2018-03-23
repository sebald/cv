import { LineHeightConfig, ScaleConfig, TypographyConfig } from './types';
import { ensurePx, pxToRem } from './unit';

/**
 * Create a function that generates modular scales base on given `fontSize`,
 * `htmlFontSize` and `ratio`. The resuling scale (font size value) will be
 * in `rem`.
 */
export const createScale = ({ fontSize, htmlFontSize, ratio }: ScaleConfig) => (
  level: number
) => pxToRem(ensurePx(fontSize, htmlFontSize) * ratio ** level, htmlFontSize);

/**
 * Returns the next line height (in "rem") for a given `fontSize` that will satisfy
 * vertical rhythm.
 *
 * Usually, in CSS you'll use a unitless number for the value of `line-height`
 * in order to avoid unwanted line-height cascading for nested elements containing text.
 * However, in this system, all elements containing text should/will have an explicit line
 * height set, so they won't be influenced by the cascade.
 *
 * For more information see: http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
 */
export const getLineHeight = ({
  fontSize,
  htmlFontSize,
  baseline,
}: LineHeightConfig) =>
  pxToRem(
    Math.ceil(
      ensurePx(ensurePx(fontSize, htmlFontSize), htmlFontSize) / baseline
    ) * baseline,
    htmlFontSize
  );

/**
 * Returns a `function` that generates typographic values (`fontSize`, `lineHeight`).
 * The generated values adhere configured (typograpic) `scale` and `baseline`.
 */
export const createTypography = ({
  fontSize,
  htmlFontSize,
  ratio,
  baseline,
}: TypographyConfig) => {
  const scale = createScale({ fontSize, htmlFontSize, ratio });
  return (level: number) => {
    const fs = scale(level);
    return {
      fontSize: fs,
      lineHeight: getLineHeight({ fontSize: fs, htmlFontSize, baseline }),
    };
  };
};

/**
 * Small helper function to align text with the base line.
 *
 * Why are we doing this? CSS's `line-height` will sadly not align text to the
 * typograpic baseline, but rather will vertically center the font. So if we are
 * really pendantic (which we are BTW ... at least this time), we need to
 *
 * (1) add some padding at the top (to move the text to the baseline) and
 * (2) add some margin to the bottom to preserver verticyl rhythm
 *
 * You can read more information about this approach here:
 * https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/
 */
export const adjustBaseline = (baseline: number) => (
  top?: number,
  factor = 1
) => ({
  ...(top && { paddingTop: pxToRem(top) }),
  marginTop: 0,
  marginBottom: pxToRem(factor * baseline - (top || 0)),
});
