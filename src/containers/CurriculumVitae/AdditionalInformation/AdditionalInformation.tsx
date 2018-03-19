import * as React from 'react';

import { CvConsumer } from '..';
import * as List from '../../../components/List';
import * as Section from '../../../components/Section';
import { Text } from '../../../components/Typography';

import { AdditionalInformationProps } from './types';

export const AdditionalInformation: React.SFC<AdditionalInformationProps> = ({
  className,
}) => (
  <CvConsumer>
    {({ additional_information }) =>
      additional_information && (
        <Section.Container className={className} title="Additional Information">
          <List.Unordered>
            {additional_information.map((info, idx) => (
              <List.Item key={idx}>
                <Text>{info}</Text>
              </List.Item>
            ))}
          </List.Unordered>
        </Section.Container>
      )
    }
  </CvConsumer>
);
