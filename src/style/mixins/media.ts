import { Interpolation, ThemedStyledProps } from 'styled-components';
import { css } from '../styled-components';
import { Theme, ThemedInterpolation } from '../types';
import { px } from '../utils';

export const breakpoints: ThemedInterpolation = props =>
  props.theme.breakpoints;

export const media = <P = {}>(name: keyof Theme['breakpoints']) => (
  strings: TemplateStringsArray,
  ...interpolations: Interpolation<ThemedStyledProps<P, Theme>>[]
) => css`
  @media (min-width: ${props => px(breakpoints(props)[name])}) {
    ${css(strings, ...interpolations)};
  }
`;
