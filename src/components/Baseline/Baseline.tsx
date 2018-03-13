import { pxToRem, styled, theme } from '../../style';

export const Baseline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255, 105, 180, 0.5),
    rgba(255, 105, 180, 0.5) 1px,
    transparent 1px,
    transparent ${pxToRem(theme.baseline)}
  );
`;
Baseline.displayName = 'Baseline';
