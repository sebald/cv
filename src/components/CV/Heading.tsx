import * as React from 'react';

import { baseline, styled } from '../../style';
import * as Typography from '../Typography';

const size = 2;

const Wrapper = Typography.Heading.extend`
  position: relative;

  &:before {
    content: '';
    display: block;

    height: ${size}px;
    width: 100%;

    background: ${({ theme }) => theme.palette.grey['700']};

    position:absolute;
    bottom: calc(50% - ${size}px);
    left: 0;

    z-index: 1;
  }
`;

const Background = styled.span`
  position: relative;
  padding-right: ${baseline};
  background: #fff;
  z-index: 5;
`;

export const Heading: React.SFC = ({ children }) => (
  <Wrapper>
    <Background>{children}</Background>
  </Wrapper>
);
