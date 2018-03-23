import flow from 'lodash-es/flow';
import fromPairs from 'lodash-es/fromPairs';
import isNumber from 'lodash-es/isNumber';
import merge from 'lodash-es/merge';
import zip from 'lodash-es/zip';
import { CSSProperties } from 'react';

import { StyledMixin, ThemedStyledProps } from '../theme';
import { pxToRem } from '../utils';
import { Spacing } from './types';
import { getHtmlFontSize } from './typography';

// Baseline
// ---------------
const getBaseline = (props: ThemedStyledProps) => props.theme.space.baseline;

export const baseline = (factor: number): StyledMixin =>
  flow(getBaseline, x => x * factor, pxToRem);

// Padding
// ---------------
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

// Spacing
// ---------------
const SPACING_PROP_EXP = /^m[xy]?$/;

const sidesMap = {
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
};

const getSidesFromKey = (key: string) => {
  const [, b] = key.split('');
  const sides = sidesMap[b as keyof typeof sidesMap] || [''];
  return sides.map(side => `margin${side}`);
};

export const space: StyledMixin<Spacing> = props => {
  const bl = getBaseline(props);
  const hfs = getHtmlFontSize(props);

  return Object.entries(props)
    .filter(([key, value]) => SPACING_PROP_EXP.test(key))
    .map(([key, value]) => {
      const sides = getSidesFromKey(key);
      const values = Array(sides.length).fill(pxToRem(bl * value, hfs));
      return zip(sides, values);
    })
    .map(fromPairs)
    .reduce<CSSProperties>(merge, {});
};
