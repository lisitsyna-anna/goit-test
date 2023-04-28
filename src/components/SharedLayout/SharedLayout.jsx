import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { LayoutConteiner, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutConteiner>
      <header>Header</header>
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <footer>Footer</footer>
    </LayoutConteiner>
  );
};

export default SharedLayout;
