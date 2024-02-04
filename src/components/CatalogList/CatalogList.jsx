import { useSelector } from 'react-redux';
import AdvertCard from '../AdvertCard';
import { selectFavorites } from '../../redux/selectors';
import { Container } from './CatalogList.styled';

const CatalogList = ({ adverts }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {adverts.map((advert) => (
        <AdvertCard
          key={advert.id}
          advert={advert}
          isFavorite={favorites.some((fav) => fav.id === advert.id)}
        />
      ))}
    </Container>
  );
};

export default CatalogList;
