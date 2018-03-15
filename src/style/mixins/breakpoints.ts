import { Interpolation } from 'styled-components';
import { css } from '../styled-components';
import { StyledMixin, Theme, ThemedStyledProps } from '../theme';
import { px } from '../utils';

export const breakpoints: StyledMixin = props => props.theme.breakpoints;

export const media = <P = {}>(name: keyof Theme['breakpoints']) => (
  strings: TemplateStringsArray,
  ...interpolations: Interpolation<ThemedStyledProps<P>>[]
) => css`
  @media (min-width: ${props => px(breakpoints(props)[name])}) {
    ${css(strings, ...interpolations)};
  }
`;
