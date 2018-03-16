/**
 * Stolen from:
 * https://github.com/jxnblk/grid-styled/tree/master/styled-space
 */
import isString from 'lodash-es/isString';
import * as React from 'react';

import { space, styled } from '../../style';
import { SpaceProps } from './types';

const mergeClassNames = (...names: (string | undefined)[]) => ({
  className: names
    .filter(isString)
    .join(' ')
    .trim(),
});

export class StyledChildren extends React.Component<SpaceProps> {
  render() {
    const { className, children } = this.props;
    const styledChildren = React.Children.toArray(children).map(
      child =>
        React.isValidElement<any>(child)
          ? React.cloneElement(
              child,
              mergeClassNames(child.props.className, className)
            )
          : child
    );

    return <>{styledChildren}</>;
  }
}

export const Space = styled(StyledChildren)`
  ${space};
`;
