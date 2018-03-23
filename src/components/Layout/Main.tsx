import * as React from 'react';
import { color, media, padding, styled } from '../../style';
import { MainProps } from './types';

const MainWrapper = styled.main`
  width: 100%;
  flex: 1;

  ${media('small')`
    flex-basis: 100%;
    order: 2;
    width: calc(100% - ${props => `${props.theme.layout.sidebar}px`});
    
    border-left: 1px solid ${color(palette => palette.grey['100'])};
  `};
`;
MainWrapper.displayName = 'MainWrapper';

const MainContent = styled.div`
  ${padding(1, 3)};

  ${media('small')`
    height: 100vh;
    overflow-y: scroll;
  `};
`;

export const Main: React.SFC<MainProps> = ({ className, children }) => (
  <MainWrapper className={className}>
    <MainContent>{children}</MainContent>
  </MainWrapper>
);
