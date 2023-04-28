import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';
import GlobalStyle from './ClobalStyle';
import SharedLayout from './SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
