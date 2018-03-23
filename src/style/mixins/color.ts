import { InterpolationValue } from 'styled-components';
import { StyledMixin, Theme } from '../theme';

export const color = (
  fn: (palette: Theme['palette']) => InterpolationValue
): StyledMixin => props => fn(props.theme.palette);
