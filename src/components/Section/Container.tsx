import * as React from 'react';

import { px, styled } from '../../style';
import { SectionHeading } from './SectionHeading';
import { SectionContainerProps } from './types';

const ContainerWrapper = styled.section`
  max-width: ${(props) => px(props.theme.layout.content)};
`;

export const Container: React.FC<SectionContainerProps> = ({
  className,
  title,
  children,
}) => (
  <ContainerWrapper className={className}>
    <SectionHeading>{title}</SectionHeading>
    {children}
  </ContainerWrapper>
);

Container.displayName = 'SectionContainer';
