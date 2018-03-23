import { color, styled } from '../../style';

export const Link = styled.a`
  color: ${({ theme }) => theme.typography.body.color};
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${color(palette => palette.grey['500'])};
  }
`;
