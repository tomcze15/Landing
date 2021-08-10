import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '@/components/Routes';
import Layout from '@/layout';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
