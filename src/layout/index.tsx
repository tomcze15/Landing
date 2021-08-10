import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div>
    <Header />
    { children }
    <Footer />
  </div>
);

export default Layout;
