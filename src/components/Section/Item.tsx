import * as React from 'react';

import { padding, styled } from '../../style';
import { Caption, Subheading } from '../Typography';
import { SectionItemProps } from './types';

const ItemWrapper = styled.div`
  ${padding(0, 0, 3)};
`;

export const Item: React.FC<SectionItemProps> = ({
  title,
  caption,
  children,
}) => (
  <ItemWrapper>
    <Subheading>{title}</Subheading>
    {caption && <Caption>{caption}</Caption>}
    {children}
  </ItemWrapper>
);
