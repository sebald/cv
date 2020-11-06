import * as React from 'react';

import { CvConsumer } from '..';
import { useLanguage } from '../../../components/Language';
import * as Section from '../../../components/Section';
import { formatActivityAtLocation, formatDateString } from '../format';

import { EducationProps } from './types';

export const Education: React.FC<EducationProps> = ({ className }) => {
  const { current } = useLanguage();
  return (
    <Section.Container className={className} title="Education">
      <CvConsumer>
        {({ education }) =>
          education.map(({ date, degree, institution, thesis, grade }, idx) => {
            const formattedDate = formatDateString(date, current);
            return (
              <Section.Item
                key={idx}
                title={formatActivityAtLocation(degree, institution)}
                caption={`${formattedDate}, "${thesis}" (${grade})`}
              />
            );
          })
        }
      </CvConsumer>
    </Section.Container>
  );
};
