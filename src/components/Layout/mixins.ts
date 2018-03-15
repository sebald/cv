import { css, media, padding } from '../../style';

export const aside = css`
  width: 100%;
  background: ${props => props.theme.palette.grey['50']};
  ${padding(1)} ${media('small')`
    order: 1;
    width: ${props => `${props.theme.layout.sidebar}px`};
  `};
`;
