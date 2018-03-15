import { Color, StyledMixin } from '../theme';

export const color = (value: Color): StyledMixin => props =>
  props.theme.palette;
