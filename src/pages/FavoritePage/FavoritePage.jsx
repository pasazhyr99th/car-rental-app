import { useSelector } from 'react-redux';
import { Container } from './FavoritePage.styled';
import { selectFavorites } from '../../redux/selectors';
import AdvertCard from '../../components/AdvertCard/AdvertCard';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length ? (
        favorites.map((advert) => (
          <AdvertCard key={advert.id} advert={advert} />
        ))
      ) : (
        <p style={{ marginTop: '100px' }}>Oops, your favourite list is empty</p>
      )}
    </Container>
  );
};

export default FavoritePage;
