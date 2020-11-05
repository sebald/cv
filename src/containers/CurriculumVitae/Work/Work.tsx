import * as React from 'react';

import { CvConsumer } from '..';
import { useLanguage } from '../../../components/Language';
import * as Section from '../../../components/Section';
import { Text } from '../../../components/Typography';
import { formatActivityAtLocation, formatPeriod } from '../format';

import { WorkProps } from './types';

export const Work: React.FC<WorkProps> = ({ className }) => {
  const { current } = useLanguage();

  return (
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
                caption={formatPeriod(period.from, period.to, current)}
              >
                {responsibilities.map((r, i) => (
                  <Text key={i}>{r}</Text>
                ))}
              </Section.Item>
            )
          )
        }
      </CvConsumer>
    </Section.Container>
  );
};
