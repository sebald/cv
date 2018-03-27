import { media, styled } from '../../style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  ${media('small')`
    flex-wrap: wrap;
  `};

  @media print {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
