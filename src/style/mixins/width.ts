import { StyledMixin } from '../theme';
import { px } from '../utils';

export const width: StyledMixin<{ width?: number }> = ({ width: w }) => ({
  ...(w ? { width: w <= 1 ? `${w * 100}%` : px(w) } : {}),
});
