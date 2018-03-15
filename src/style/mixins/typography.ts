import { TypographyStyles, TIF } from '../theme';

export const typography = (name: TypographyStyles): TIF => props =>
  props.theme.typography[name];
