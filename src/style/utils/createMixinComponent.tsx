import React from 'react';

import { styled } from '../styled-components';
import { StyledMixin } from '../theme';

import { mergeClassNames } from './classnames';
import { WithClassName } from './types';

/**
 * Idea stolen from:
 * https://github.com/jxnblk/grid-styled/tree/master/styled-space
 */
const StyledChildren: React.FC<WithClassName> = ({ className, children }) => {
  const styledChildren = React.Children.toArray(children).map((child) =>
    React.isValidElement<any>(child)
      ? React.cloneElement(
          child,
          mergeClassNames(child.props.className, className)
        )
      : child
  );

  return <>{styledChildren}</>;
};

export const createMixinComponent = <P extends {}>(
  ...mixins: StyledMixin<P>[]
) => styled(StyledChildren)([] as any, ...mixins);
