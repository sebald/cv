import { CSSProperties } from 'react';
import * as styledComponents from 'styled-components';
import {
  ThemedStyledComponentsModule,
  ThemedStyledFunction,
} from 'styled-components';

import { Theme } from './theme';

type StyledProps<T extends string> = Pick<CSSProperties, T>;

/**
 * Make styled-components work with props.
 * More info: https://github.com/styled-components/styled-components/issues/630#issuecomment-317172454
 */
type TTag = keyof JSX.IntrinsicElements;
function suit<U>(tag: TTag) {
  return styled[tag] as ThemedStyledFunction<
    JSX.IntrinsicElements[TTag] & U,
    Theme
  >;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export {
  styled,
  css,
  injectGlobal,
  keyframes,
  suit,
  StyledProps,
  ThemeProvider,
  TTag,
};
