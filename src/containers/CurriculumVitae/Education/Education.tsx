import * as React from 'react';

import { CvConsumer } from '..';
import * as Section from '../../../components/Section';
import { Text } from '../../../components/Typography';
import { formatActivityAtLocation } from '../format';

import { EducationProps } from './types';

export const Education: React.SFC<EducationProps> = ({ className }) => (
  <Section.Container className={className} title="Education">
    <CvConsumer>
      {({ education }) =>
        education.map(({ date, degree, institution, thesis, grade }, idx) => (
          <Section.Item
            key={idx}
            title={formatActivityAtLocation(degree, institution)}
            caption={date}
          >
            <Text>
              Thesis: {thesis} ({grade})
            </Text>
          </Section.Item>
        ))
      }
    </CvConsumer>
  </Section.Container>
);