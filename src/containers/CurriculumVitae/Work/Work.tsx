import * as React from 'react';

import { CvConsumer } from '..';
import * as List from '../../../components/List';
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
              <List.Unordered>
                {responsibilities.map((r, i) => (
                  <List.Item key={i}>
                    <Text>{r}</Text>
                  </List.Item>
                ))}
              </List.Unordered>
            </Section.Item>
          )
        )
      }
    </CvConsumer>
  </Section.Container>
);
