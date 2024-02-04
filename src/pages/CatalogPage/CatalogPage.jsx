import { useDispatch, useSelector } from 'react-redux';
import { Container } from './CatalogPage.styled';
import { selectAdverts } from '../../redux/selectors';
// import { filterMake, loadMore, toggleFavorite } from '../../redux/advertsSlice';
import { loadMore, toggleFavorite } from '../../redux/advertsSlice';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import { useEffect } from 'react';
import { fetchAdvertsAsync } from '../../redux/operations';

import { BtnLoadMore } from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdvertsAsync());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  // const handleFilterMake = (make) => {
  //   dispatch(filterMake(make));
  // };

  return (
    <Container>
      {adverts.map((advert) => (
        <AdvertCard
          key={advert.id}
          advert={advert}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
      <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
    </Container>
  );
};

export default CatalogPage;
