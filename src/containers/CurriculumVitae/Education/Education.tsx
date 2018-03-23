import * as React from 'react';

import { CvConsumer } from '..';
import * as Section from '../../../components/Section';
import { formatActivityAtLocation, formatDateString } from '../format';

import { EducationProps } from './types';

export const Education: React.SFC<EducationProps> = ({ className }) => (
  <Section.Container className={className} title="Education">
    <CvConsumer>
      {({ education }) =>
        education.map(({ date, degree, institution, thesis, grade }, idx) => (
          <Section.Item
            key={idx}
            title={formatActivityAtLocation(degree, institution)}
            caption={`${formatDateString(date)}, "${thesis}" (${grade})`}
          />
        ))
      }
    </CvConsumer>
  </Section.Container>
);
