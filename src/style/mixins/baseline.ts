import { ThemedInterpolation } from '../types';
import { pxToRem } from '../utils';

export const baseline: ThemedInterpolation = props =>
  pxToRem(props.theme.baseline);
