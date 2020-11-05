import * as React from 'react';

import { padding, styled } from '../../style';
import { Divider } from '../Divider';
import { Subheading } from '../Typography';
import { InfoboxProps } from './types';

const InfoboxWrapper = styled.div`
  ${padding(0, 0, 2)};
`;

export const Infobox: React.FC<InfoboxProps> = ({
  className,
  title,
  children,
}) => (
  <InfoboxWrapper className={className}>
    <Subheading textAlign="center" fontWeight={500}>
      {title}
    </Subheading>
    <Divider width={1 / 2} />
    {children}
  </InfoboxWrapper>
);
