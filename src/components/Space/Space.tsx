/**
 * Stolen from:
 * https://github.com/jxnblk/grid-styled/tree/master/styled-space
 */
import * as React from 'react';
import { space, styled } from '../../style';

export type StyledProps = {
  className?: string;
};

export type SpaceProps = StyledProps & {};

export class StyledChildren extends React.Component<SpaceProps> {
  render() {
    const { className, children } = this.props;
    const styledChildren = React.Children.toArray(children).map(
      child =>
        React.isValidElement<any>(child)
          ? React.cloneElement(child, {
              className: [child.props.className || '', className!]
                .join(' ')
                .trim(),
            })
          : child
    );

    return <>{styledChildren}</>;
  }
}

export const Space = styled(StyledChildren)`
  ${space};
`;
