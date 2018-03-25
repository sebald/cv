import { StyledMixin } from '../theme';
import { ensureDuration } from '../utils';

import { Animation } from './types';

// https://material.io/guidelines/motion/duration-easing.html
export const curve = {
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
};

export const animation: StyledMixin<Animation> = ({
  theme,
  animation: name,
  duration = 250,
  easing = 'standard',
  delay = 0,
  mode = 'none',
}) => ({
  animation: `${theme.animation[name]} ${ensureDuration(duration)} ${
    curve[easing]
  } ${ensureDuration(delay)} ${mode}`,
});
