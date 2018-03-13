import * as React from 'react';

import { BaselineGrid } from './components/Baseline';
import * as Layout from './components/Layout';

export const App: React.SFC = () => (
  <Layout.Container>
    <Layout.Header>Header</Layout.Header>
    <Layout.Main>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est risus,
      dignissim at nisl id, tristique cursus odio. Vestibulum fermentum est eu
      nisi congue, vel auctor metus interdum. Aliquam suscipit convallis enim
      vitae imperdiet. Integer interdum lacus eu eros fringilla, quis rhoncus
      urna laoreet. Praesent quis pharetra quam. Sed non orci facilisis,
      condimentum nisi eget, vehicula mauris. Sed vitae enim nec enim viverra
      mollis sit amet in odio. Ut ac lorem mollis, facilisis purus nec,
      sollicitudin ligula.
    </Layout.Main>
    <Layout.Footer>Footer</Layout.Footer>
    <BaselineGrid />
  </Layout.Container>
);
