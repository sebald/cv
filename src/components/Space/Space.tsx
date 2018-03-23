/**
 * Stolen from:
 * https://github.com/jxnblk/grid-styled/tree/master/styled-space
 */
import * as React from 'react';

import { mergeClassNames, space, styled } from '../../style';
import { SpaceProps } from './types';

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
