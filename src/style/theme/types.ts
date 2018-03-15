import * as Styled from 'styled-components';
import theme from '.';
import palette from './palette';
import { typeStyles } from './typography';

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

export type TIF<P = {}> = ThemedInterpolationFunction<P>;

// Theme Props
// ---------------
export type TypographyStyles = keyof typeof typeStyles;
export type Color = keyof typeof palette;
