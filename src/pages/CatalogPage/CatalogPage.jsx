import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, BtnLoadMore } from './CatalogPage.styled';
import CatalogList from '../../components/CatalogList';
import Filter from '../../components/Filter';
import { fetchAdvertsAsync } from '../../redux/operations';
import { loadMore } from '../../redux/advertsSlice';
import {
  selectAdverts,
  selectMakeFilter,
  selectPage,
  selectHasMore,
} from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adverts = useSelector(selectAdverts);
  const makeFilter = useSelector(selectMakeFilter);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchAdvertsAsync());
  }, [dispatch, makeFilter, page]);

  const handleLoadMore = useCallback(() => {
    if (hasMore) {
      dispatch(loadMore());
    }
  }, [dispatch, hasMore]);

  const handleFilterChange = useCallback(
    (make) => {
      navigate(`/catalog?make=${make}`);
    },
    [navigate]
  );

  return (
    <Container>
      <Filter onFilterChange={handleFilterChange} />
      <CatalogList adverts={adverts} />
      {hasMore && <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>}
    </Container>
  );
};

export default CatalogPage;

// import { useDispatch, useSelector } from 'react-redux';
// import { Container } from './CatalogPage.styled';
// import { selectAdverts } from '../../redux/selectors';
// // import { filterMake, loadMore, toggleFavorite } from '../../redux/advertsSlice';
// import { loadMore, toggleFavorite } from '../../redux/advertsSlice';
// import AdvertCard from '../../components/AdvertCard/AdvertCard';
// import { useEffect } from 'react';
// import { fetchAdvertsAsync } from '../../redux/operations';

// import { BtnLoadMore } from './CatalogPage.styled';

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);

//   useEffect(() => {
//     dispatch(fetchAdvertsAsync());
//   }, [dispatch]);

//   const handleLoadMore = () => {
//     dispatch(loadMore());
//   };

//   const handleToggleFavorite = (id) => {
//     dispatch(toggleFavorite(id));
//   };

//   // const handleFilterMake = (make) => {
//   //   dispatch(filterMake(make));
//   // };

//   return (
//     <Container>
//       {adverts.map((advert) => (
//         <AdvertCard
//           key={advert.id}
//           advert={advert}
//           onToggleFavorite={handleToggleFavorite}
//         />
//       ))}
//       <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
//     </Container>
//   );
// };

// export default CatalogPage;
