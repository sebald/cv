import * as React from 'react';

import { CvConsumer } from '..';
import { Caption, Display } from '../../../components/Typography';
import { css, styled } from '../../../style';

import { TitleImage } from './TitleImage';
import { TitleProps } from './types';

const centerOnScreenMixin = css`
  @media screen {
    text-align: center;
  }
`;

const TitleDisplay = styled(Display)`
  ${centerOnScreenMixin};
`;

const TitleCaption = styled(Caption)`
  ${centerOnScreenMixin};
`;

export const Title: React.SFC<TitleProps> = ({ image }) => (
  <CvConsumer>
    {({ personalInformation: { firstName, lastName }, position }) => (
      <>
        {image && <TitleImage src={image} />}
        <TitleDisplay>
          {firstName} {lastName}
        </TitleDisplay>
        <TitleCaption>{position}</TitleCaption>
      </>
    )}
  </CvConsumer>
);
