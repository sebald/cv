import { css, media } from '../../style';

export const aside = css`
  width: 100%;
  background: #fafafa;

  ${media('small')`
    order: 1;
    width: ${props => `${props.theme.layout.sidebar}px`};
  `};
`;
