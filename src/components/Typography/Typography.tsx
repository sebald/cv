import capitalize from 'lodash-es/capitalize';
import {
  fontWeight,
  suit,
  textAlign,
  textTransform,
  typography,
  StyledProps,
  TTag,
} from '../../style';
import { TypographyStyle } from '../../style/theme';

type TypographyProps = StyledProps<
  'fontWeight' | 'textAlign' | 'textTransform'
>;

const createTypography = (name: TypographyStyle, tag: TTag) => {
  const Component = suit<TypographyProps>(tag)`
    ${typography(name)};
    ${fontWeight};
    ${textTransform};
    ${textAlign};
  `;
  Component.displayName = capitalize(name);
  return Component;
};

export const Display = createTypography('display', 'h1');
export const Heading = createTypography('heading', 'h2');
export const Subheading = createTypography('subheading', 'h3');
export const Caption = createTypography('caption', 'h6');
export const Text = createTypography('body', 'p');
