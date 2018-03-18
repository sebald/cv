import { styled } from '../../style';

export const Divider = styled.hr`
  border: 0;
  margin: 0 auto;

  height: 1px;

  background: ${props => props.theme.palette.grey['400']};
  transform: translateY(-1px);
`;
