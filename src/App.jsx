import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout';
import { ContainerApp } from './App.styled';
// import FirstPage from 'pages/FirstPage/FirstPage';
// import HomePage from './pages/HomePage';
// import SecondPage from 'pages/SecondPage/SecondPage';
// import CatalogPage from './pages/CatalogPage';
// import FavoritePage from './pages/FavoritePage';
// import { AppWrapper } from './App.styled';

const Home = lazy(() => import('pages/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage'));
const Favorite = lazy(() => import('pages/FavoritePage'));

function App() {
  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContainerApp>
  );
}
export default App;
