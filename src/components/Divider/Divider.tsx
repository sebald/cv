import { color, suit, width } from '../../style';

export const Divider = suit<{ width?: number }>('hr')`
  border: 0;
  margin: 0 auto;

  height: 1px;
  ${width}

  background: ${color(palette => palette.grey['300'])};
  transform: translateY(-1px);
`;
