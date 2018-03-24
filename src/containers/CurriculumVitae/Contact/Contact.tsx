import * as React from 'react';

import { CvConsumer } from '..';
import { Infobox } from '../../../components/Infobox';
import { Text } from '../../../components/Typography';

const CenteredText = Text.extend`
  display: block;
  text-align: center;
`;

export const Contact: React.SFC = () => (
  <CvConsumer>
    {({ personalInformation: { contact } }) => (
      <Infobox title="Contact">
        <CenteredText>
          {contact.street}
          <br />
          {contact.zip} {contact.city}
        </CenteredText>
        <CenteredText>
          {contact.email}
          {contact.phone && (
            <>
              <br />
              {contact.phone}
            </>
          )}
        </CenteredText>
      </Infobox>
    )}
  </CvConsumer>
);
