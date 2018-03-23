/**
 * The values will be treated like the following:
 * - number -> "px" value
 * - string -> "rem" value
 */
export type FontValue = number | string;

export type ScaleConfig = {
  fontSize: FontValue;
  htmlFontSize: number;
  ratio: number;
};

export type LineHeightConfig = {
  fontSize: FontValue;
  htmlFontSize: number;
  baseline: number;
};

export type TypographyConfig = ScaleConfig & LineHeightConfig;

export type WithClassName = {
  className?: string;
};
