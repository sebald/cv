import { media, padding, styled } from '../../style';
import { aside } from './mixins';

export const Header = styled.header`
  ${aside};

  ${media('small')`
    ${padding(1, 2)}
  `};
`;
