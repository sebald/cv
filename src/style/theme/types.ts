import * as Styled from 'styled-components';
import theme from '.';
import palette from './palette';

// Theme
// ---------------
export type Theme = typeof theme;

export type ThemedStyledProps<P = {}> = Styled.ThemedStyledProps<P, Theme>;

export type ThemedInterpolation = Styled.Interpolation<
  Styled.ThemeProps<Theme>
>;

export type ThemedInterpolationFunction<P = {}> = Styled.InterpolationFunction<
  Styled.ThemeProps<Theme> & P
>;

export type StyledMixin<P = {}> = ThemedInterpolationFunction<P>;

// Theme Props
// ---------------
export type TypographyStyles =
  | 'display'
  | 'heading'
  | 'subheading'
  | 'caption'
  | 'body';
export type Color = keyof typeof palette;
