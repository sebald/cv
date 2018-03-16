import {
  fontWeight,
  suit,
  textAlign,
  textTransform,
  typography,
  StyledProps,
} from '../../style';

export const Subheading = suit<
  StyledProps<'fontWeight' | 'textAlign' | 'textTransform'>
>('h3')`
  ${typography('subheading')};
  ${fontWeight};
  ${textTransform};
  ${textAlign};
`;
Subheading.displayName = 'Subheading';
