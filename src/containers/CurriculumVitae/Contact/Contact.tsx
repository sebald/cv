import * as React from 'react';

import { CvConsumer } from '..';
import { Infobox } from '../../../components/Infobox';
import { Text } from '../../../components/Typography';
import { padding, styled } from '../../../style';

const CenteredText = Text.extend`
  display: block;
  text-align: center;
`;

const ContactInfobox = styled(Infobox)`
  @media print {
    /* prettier-ignore */
    ${padding(1, 0, 0)}

    > :first-child {
      display: none;
    }
  }
`;

export const Contact: React.SFC = () => (
  <CvConsumer>
    {({ personalInformation: { contact } }) => (
      <ContactInfobox title="Contact">
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
      </ContactInfobox>
    )}
  </CvConsumer>
);
