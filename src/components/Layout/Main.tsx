import { media, styled } from '../../style';

export const Main = styled.main`
  width: 100%;
  flex: 1;

  ${media('small')`
  flex-basis: 100%;
    order: 2;
    width: calc(100% - ${props => `${props.theme.layout.sidebar}px`});
  `};
`;
