import React from 'react';

import { animation, mergeClassNames, styled } from '../../style';
import { AnimateProps } from './types';

const AnimatedChild: React.SFC<AnimateProps> = ({ className, children }) => {
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
};

export const Animate = styled(AnimatedChild)`
  ${animation};
`;
