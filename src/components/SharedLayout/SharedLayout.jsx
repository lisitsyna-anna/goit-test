import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { LayoutConteiner, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutConteiner>
      <Header />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </LayoutConteiner>
  );
};

export default SharedLayout;
