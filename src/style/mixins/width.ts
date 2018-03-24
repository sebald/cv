import { InterpolationFunction } from '../theme';
import { px } from '../utils';

export const width: InterpolationFunction<{ width?: number }> = ({
  width: w,
}) => ({
  ...(w ? { width: w <= 1 ? `${w * 100}%` : px(w) } : {}),
});
