import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout';
import { ContainerApp } from './App.styled';

const Home = lazy(() => import('pages/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage'));
const Favorite = lazy(() => import('pages/FavoritePage'));

const App = () => {
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
};
export default App;
