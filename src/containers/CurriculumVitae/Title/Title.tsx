import * as React from 'react';

import { CvConsumer } from '..';
import { Caption, Display } from '../../../components/Typography';

export const Title: React.SFC = () => (
  <CvConsumer>
    {({ personalInformation: { firstName, lastName }, position }) => (
      <>
        <Display textAlign="center">
          {firstName} {lastName}
        </Display>
        <Caption textAlign="center">{position}</Caption>
      </>
    )}
  </CvConsumer>
);
