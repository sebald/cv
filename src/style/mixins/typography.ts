import { StyledMixin, ThemedStyledProps, TypographyStyles } from '../theme';
import { propOrEmpty } from './utils';

export const getHtmlFontSize = (props: ThemedStyledProps) =>
  props.theme.typography.htmlFontSize;

export const typography = (name: TypographyStyles): StyledMixin => props =>
  props.theme.typography[name];

export const fontWeight = propOrEmpty('fontWeight');
export const textAlign = propOrEmpty('textAlign');
export const textTransform = propOrEmpty('textTransform');
