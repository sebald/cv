import * as React from 'react';

import { CvConsumer } from '..';
import * as List from '../../../components/List';
import * as Section from '../../../components/Section';

import { AdditionalInformationProps } from './types';

export const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  className,
}) => (
  <CvConsumer>
    {({ additional_information }) =>
      additional_information && (
        <Section.Container className={className} title="Misc">
          <List.Unordered>
            {additional_information.map((info, idx) => (
              <List.Item key={idx}>{info}</List.Item>
            ))}
          </List.Unordered>
        </Section.Container>
      )
    }
  </CvConsumer>
);
