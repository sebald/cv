import { baseline, styled } from '../../style';

export const Baseline = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255, 105, 180, 0.5),
    rgba(255, 105, 180, 0.5) 1px,
    transparent 1px,
    transparent ${baseline(1)}
  );
`;
Baseline.displayName = 'Baseline';
