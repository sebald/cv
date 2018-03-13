import { theme } from './theme';

const { htmlFontSize } = theme;

export const px = (value: number) => `${value}px`;

export const pxToRem = (pixel: number, base = htmlFontSize) =>
  `${parseFloat((pixel / base).toFixed(5))}rem`;

export const remToPx = (rem: string, base = htmlFontSize) =>
  parseFloat(rem) * base;

export const ensurePx = (value: number | string, base = htmlFontSize) =>
  typeof value === 'string' ? remToPx(value, base) : value;
