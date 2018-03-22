import * as React from 'react';

import { CvConsumer } from '..';
import { Caption, Display } from '../../../components/Typography';

import { TitleImage } from './TitleImage';
import { TitleProps } from './types';

export const Title: React.SFC<TitleProps> = ({ image }) => (
  <CvConsumer>
    {({ personalInformation: { firstName, lastName }, position }) => (
      <>
        {image && <TitleImage src={image} />}
        <Display textAlign="center">
          {firstName} {lastName}
        </Display>
        <Caption textAlign="center">{position}</Caption>
      </>
    )}
  </CvConsumer>
);
