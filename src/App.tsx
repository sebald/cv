import * as React from 'react';

import { BaselineGrid } from './components/Baseline';
import * as Layout from './components/Layout';
import { Space } from './components/Space';

import * as CV from './containers/CurriculumVitae';

export const App: React.SFC = () => (
  <Layout.Container>
    <Layout.Header>
      <CV.Title />
    </Layout.Header>
    <Layout.Main>
      <Space my={1}>
        <CV.Work />
        <CV.Education />
        <CV.AdditionalInformation />
      </Space>
    </Layout.Main>
    <Layout.Footer>
      <CV.Contact />
      <CV.Social />
    </Layout.Footer>
    <BaselineGrid />
  </Layout.Container>
);
