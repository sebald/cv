import * as styledComponents from 'styled-components';
import {
  ThemedStyledComponentsModule,
  ThemedStyledFunction,
} from 'styled-components';

import { Theme } from './types';

// https://github.com/styled-components/styled-components/issues/630#issuecomment-317172454
function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> =>
    fn as ThemedStyledFunction<P & U, T, O & U>;
}

// Alternative, maybe better approach?
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

export { styled, css, injectGlobal, keyframes, withProps, suit, ThemeProvider };
