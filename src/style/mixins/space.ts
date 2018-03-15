import isNumber from 'lodash-es/isNumber';

import { TIF } from '../theme';
import { pxToRem } from '../utils';

export const baseline: TIF = props => pxToRem(props.theme.space.baseline);

export const padding = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
): TIF => props => ({
  padding: [top, right, bottom, left]
    .filter(isNumber)
    .map(v => v * props.theme.space.baseline)
    .map(v => pxToRem(v))
    .join(' '),
});
