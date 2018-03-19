import { StyledComponentClass } from 'styled-components';
import { color, Theme } from '../../style';

import { Icon } from '../Icon';
import { Link } from './Link';

const IconWithLink: StyledComponentClass<
  React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
  Theme
> = Icon.withComponent(Link);

export const IconLink = IconWithLink.extend`
  color: ${color(palette => palette.grey['300'])};

  &:hover {
    color: ${color(palette => palette.grey['600'])};
  }
`;
