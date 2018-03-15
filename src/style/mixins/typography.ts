import { StyledMixin, ThemedStyledProps, TypographyStyles } from '../theme';

export const getHtmlFontSize = (props: ThemedStyledProps) =>
  props.theme.typography.htmlFontSize;

export const typography = (name: TypographyStyles): StyledMixin => props =>
  props.theme.typography[name];
