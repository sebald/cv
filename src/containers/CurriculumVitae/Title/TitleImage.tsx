import { baseline, styled } from '../../../style';

const size = 12;

export const TitleImage = styled.img`
  display: none;

  width: ${baseline(size)};
  height: ${baseline(size)};

  margin: 0 auto;

  @media (min-height: 800px) {
    display: block;
  }
`;
