import * as React from 'react';

import { Divider } from '../Divider';
import { Subheading, Text } from '../Typography';
import { CvConsumer } from './CV';

export const Contact: React.SFC = () => (
  <CvConsumer>
    {({ personalInformation: { contact } }) => (
      <>
        <Subheading textAlign="center">Contact</Subheading>
        <Divider />
        <Text textAlign="center">
          {contact.street}
          <br />
          {contact.zip} {contact.city}
        </Text>
        <Text textAlign="center">
          {contact.email}
          <br />
          {contact.phone}
        </Text>
      </>
    )}
  </CvConsumer>
);
