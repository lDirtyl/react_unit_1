import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import Navigation from './components/Navigation/Navigation';
// import ArticlesDetails from './pages/ArticlesDetails/ArticlesDetails';

import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage/ArticlesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const ArticlesDetails = lazy(
  () => import('./pages/ArticlesDetails/ArticlesDetails')
);

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>Header</h1>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/articles/:articleId' element={<ArticlesDetails />}>
            <Route path='somePath' element={<h2>Some Path</h2>} />
            <Route path='somePath2' element={<h2>Some Path2</h2>} />
            <Route path='somePath3' element={<h2>Some Path3</h2>} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
        <br />
        <footer>Footer</footer>
    </>
  );
};
export default App;
// http://localhost:5173/
// http://localhost:5173/about
