import { color } from '../../style';
import { Text } from '../Typography';

export const Item = Text.withComponent('li').extend`
  &:before {
    content: '-';
    color: ${color(palette => palette.grey['400'])};
    padding-right: 10px;
  }
`;
