import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
// import { lazy, useEffect } from 'react';

import SharedLayout from './components/SharedLayout';
import { ContainerApp } from './App.styled';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectPage } from './redux/selectors';
// import { fetchAdverts } from './redux/operations';

const Home = lazy(() => import('pages/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage'));
const Favorite = lazy(() => import('pages/FavoritePage'));

const App = () => {
  // const dispatch = useDispatch();
  // const page = useSelector(selectPage);

  // useEffect(() => {
  //   dispatch(fetchAdverts(page));
  // }, [dispatch, page]);

  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContainerApp>
  );
};

export default App;
