import { css, media, padding, px } from '../../style';

export const aside = css`
  width: 100%;
  ${padding(1, 1, 0)} ${media('small')`
    order: 1;
    width: ${props => px(props.theme.layout.sidebar)};
    ${padding(1, 2, 4)}
  `};
`;
