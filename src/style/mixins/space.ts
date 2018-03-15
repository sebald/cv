import flow from 'lodash-es/flow';
import isNumber from 'lodash-es/isNumber';

import { StyledMixin, ThemedStyledProps } from '../theme';
import { pxToRem } from '../utils';

const getBaseline = (props: ThemedStyledProps) => props.theme.space.baseline;

export const baseline: StyledMixin = flow(getBaseline, pxToRem);

export const padding = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
): StyledMixin => props => ({
  padding: [top, right, bottom, left]
    .filter(isNumber)
    .map(v => v * getBaseline(props))
    .map(v => pxToRem(v))
    .join(' '),
});
