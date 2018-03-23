export const DEFAULT_HTML_FONT_SIZE = 16;

export const px = (value: number) => `${value}px`;

export const pxToRem = (pixel: number, base = DEFAULT_HTML_FONT_SIZE) =>
  `${parseFloat((pixel / base).toFixed(5))}rem`;

export const remToPx = (rem: string, base = DEFAULT_HTML_FONT_SIZE) =>
  parseFloat(rem) * base;

export const ensurePx = (
  value: number | string,
  base = DEFAULT_HTML_FONT_SIZE
) => (typeof value === 'string' ? remToPx(value, base) : value);

export const ensureDuration = (value: number | string) =>
  typeof value === 'string' ? value : `${value}ms`;
