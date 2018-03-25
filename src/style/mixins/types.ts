import { Theme } from '../theme';
import { curve } from './animation';

export type Spacing = {
  m?: number;
  mx?: number;
  my?: number;
};

export type Animation = {
  animation: keyof Theme['animation'];
  duration?: number;
  easing?: keyof typeof curve;
  delay?: number;
  mode?: 'none' | 'forwards' | 'backwards' | 'both';
};
