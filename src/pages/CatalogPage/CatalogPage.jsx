import { useDispatch, useSelector } from 'react-redux';
import { Container, Title } from './CatalogPage.styled';
import { selectAdverts } from '../../redux/selectors';
// import { filterMake, loadMore, toggleFavorite } from '../../redux/advertsSlice';
import { loadMore, toggleFavorite } from '../../redux/advertsSlice';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import { useEffect } from 'react';
import { fetchAdvertsAsync } from '../../redux/operations';

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
      <Title>Catalog Page</Title>
      {adverts.map((advert) => (
        <AdvertCard
          key={advert.id}
          advert={advert}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
      <button onClick={handleLoadMore}>Load more</button>
    </Container>
  );
};

export default CatalogPage;
