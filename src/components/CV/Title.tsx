import * as React from 'react';

import * as Typography from '../Typography';
import { CvConsumer } from './CV';

export const Title: React.SFC = () => (
  <CvConsumer>
    {({ personalInformation: { firstName, lastName }, position }) => (
      <>
        <Typography.Display textAlign="center">
          {firstName} {lastName}
        </Typography.Display>
        <Typography.Subheading fontWeight={300} textAlign="center">
          {position}
        </Typography.Subheading>
      </>
    )}
  </CvConsumer>
);
