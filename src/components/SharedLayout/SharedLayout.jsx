import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <header>Header</header>
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
