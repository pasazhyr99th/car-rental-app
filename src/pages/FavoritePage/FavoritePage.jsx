import { useSelector } from 'react-redux';
import { Container } from './FavoritePage.styled';
import { selectFavorites } from '../../redux/selectors';
import AdvertCard from '../../components/AdvertCard/AdvertCard';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.map((advert) => (
        <AdvertCard key={advert.id} advert={advert} />
      ))}
    </Container>
  );
};

export default FavoritePage;
