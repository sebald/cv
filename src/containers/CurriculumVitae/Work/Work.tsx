import * as React from 'react';

import { CvConsumer } from '..';
import * as Section from '../../../components/Section';
import { Text } from '../../../components/Typography';
import { formatActivityAtLocation, formatPeriod } from '../format';

import { WorkProps } from './types';

export const Work: React.SFC<WorkProps> = ({ className }) => (
  <Section.Container className={className} title="Work">
    <CvConsumer>
      {({ workExperience }) =>
        workExperience.map(
          ({ company, position, period, responsibilities }, idx) => (
            <Section.Item
              key={idx}
              title={formatActivityAtLocation(
                position,
                company && company.name
              )}
              caption={formatPeriod(period.from, period.to)}
            >
              {responsibilities.map((r, i) => <Text key={i}>{r}</Text>)}
            </Section.Item>
          )
        )
      }
    </CvConsumer>
  </Section.Container>
);
