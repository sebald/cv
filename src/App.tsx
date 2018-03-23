import * as React from 'react';

import { Animate } from './components/Animate';
import { BaselineGrid } from './components/Baseline';
import { Delay } from './components/Delay';
import * as Layout from './components/Layout';
import { Space } from './components/Space';

import * as CV from './containers/CurriculumVitae';
import { Animation } from './style';

const animation: Animation = {
  animation: 'fadeInUp',
  duration: 600,
  easing: 'deceleration',
};

export const App: React.SFC = () => (
  <Delay
    timeout={100}
    render={() => (
      <Layout.Container>
        <Animate {...animation}>
          <Layout.Header>
            <CV.Title image={require('./me.png')} />
          </Layout.Header>
        </Animate>
        <Delay
          timeout={200}
          render={() => (
            <Animate {...animation}>
              <Layout.Main>
                <Space my={1}>
                  <CV.Work />
                  <CV.Education />
                  <CV.AdditionalInformation />
                </Space>
              </Layout.Main>
            </Animate>
          )}
        />
        <Animate {...animation}>
          <Layout.Footer>
            <CV.Contact />
            <CV.Social />
          </Layout.Footer>
        </Animate>
        <BaselineGrid />
      </Layout.Container>
    )}
  />
);
