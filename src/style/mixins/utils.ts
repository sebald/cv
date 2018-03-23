import { CSSProperties } from 'react';
import { StyledMixin } from '../theme';

export const propOrEmpty = <P extends keyof CSSProperties>(
  name: P
): StyledMixin<Pick<CSSProperties, P>> => (props: Pick<CSSProperties, P>) => {
  const p = props[name];
  return p ? { [name]: p } : {};
};
