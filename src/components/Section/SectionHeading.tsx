import * as React from 'react';

import { color, media, padding, styled } from '../../style';
import { Heading } from '../Typography';

const size = 3;

const SectionHeadingWrapper = Heading.extend`
  position: relative;
  text-align: center;

  &:before {
    content: '';
    display: block;

    height: ${size}px;
    width: 100%;

    background: ${color(palette => palette.grey['900'])};

    position: absolute;
    bottom: calc(50% - ${Math.abs(size / 2)}px);
    left: 0;

    z-index: 1;
  }

  ${media('small')`
    text-align: left;
  `};
`;
SectionHeadingWrapper.displayName = 'SeactionHeadingWrapper';

const SectionHeadingBackground = styled.span`
  position: relative;
  background: ${({ theme }) => theme.background.body};
  z-index: 5;

  ${padding(0, 2)} ${media('small')`
    text-align: left;
    ${padding(0, 2, 0, 0)}
  `};
`;
SectionHeadingBackground.displayName = 'SeactionHeadingBackground';

export const SectionHeading: React.SFC = ({ children }) => (
  <SectionHeadingWrapper>
    <SectionHeadingBackground>{children}</SectionHeadingBackground>
  </SectionHeadingWrapper>
);
