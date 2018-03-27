import { Interpolation } from 'styled-components';
import { css } from '../styled-components';
import { StyledMixin, Theme, ThemedStyledProps } from '../theme';
import { px } from '../utils';
import { MediaType } from './types';

export const breakpoints: StyledMixin = props => props.theme.breakpoints;

export const media = <P = {}>(
  name: keyof Theme['breakpoints'],
  mediaType: MediaType = 'all'
) => (
  strings: TemplateStringsArray,
  ...interpolations: Interpolation<ThemedStyledProps<P>>[]
) => css`
  @media ${mediaType} and (min-width: ${props =>
      px(breakpoints(props)[name])}) {
    ${css(strings, ...interpolations)};
  }
`;
