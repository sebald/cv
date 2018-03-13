import { media, styled } from '../../style';
import { aside } from './mixins';

export const Footer = styled.footer`
  ${aside} ${media('small')`
    flex-grow: 1;
  `};
`;
