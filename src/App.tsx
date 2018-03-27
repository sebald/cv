import * as React from 'react';

import { Animate } from './components/Animate';
import { BaselineGrid } from './components/Baseline';
import * as Layout from './components/Layout';
import { Space } from './components/Space';

import * as CV from './containers/CurriculumVitae';
import { Animation } from './style';

import image from './me.png';

const animation: Animation = {
  animation: 'fadeInUp',
  duration: 600,
  easing: 'deceleration',
  mode: 'both',
};

export const App: React.SFC = () => (
  <Layout.Container>
    <Animate {...animation} delay={100}>
      <Layout.Header>
        <CV.Title image={image} />
      </Layout.Header>
    </Animate>
    <Animate {...animation} delay={200}>
      <Layout.Main>
        <Space my={1}>
          <CV.Work />
          <CV.Education />
          <CV.AdditionalInformation />
        </Space>
      </Layout.Main>
    </Animate>
    <Animate {...animation} delay={100}>
      <Layout.Footer>
        <CV.Contact />
        <CV.Social />
      </Layout.Footer>
    </Animate>
    <BaselineGrid />
  </Layout.Container>
);
