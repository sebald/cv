import { Interpolation, ThemeProps } from 'styled-components';
import { theme } from './theme';

export type Theme = typeof theme;

export type ThemedInterpolation = Interpolation<ThemeProps<Theme>>;
