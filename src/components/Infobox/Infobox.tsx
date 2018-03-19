import * as React from 'react';

import { media, padding, styled } from '../../style';
import { Divider } from '../Divider';
import { Subheading } from '../Typography';
import { InfoboxProps } from './types';

const InfoboxWrapper = styled.div`
  ${padding(0, 0, 2)};

  ${media('small')`
    ${padding(0, 0, 3)};
  `};
`;

export const Infobox: React.SFC<InfoboxProps> = ({ title, children }) => (
  <InfoboxWrapper>
    <Subheading textAlign="center" fontWeight={500}>
      {title}
    </Subheading>
    <Divider width={1 / 2} />
    {children}
  </InfoboxWrapper>
);
