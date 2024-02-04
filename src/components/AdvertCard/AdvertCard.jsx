import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

import Modal from '../Modal/Modal';

import {
  ContainerCard,
  ContainerMainInfo,
  BtnFavorite,
  BtnIconFavorite,
  BtnIconFavoriteAct,
  CarImg,
  Title,
  DescriptionList,
  DescriptionItem,
  BtnLearnMore,
} from './AdvertCard.styled';

const AdvertCard = ({ advert, onToggleFavorite }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleFavorite = () => {
    onToggleFavorite(advert.id);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ContainerCard>
      <BtnFavorite onClick={handleToggleFavorite}>
        {advert.isFavorite ? (
          <BtnIconFavoriteAct>
            <use href={`${sprite}#icon-heart`}></use>
          </BtnIconFavoriteAct>
        ) : (
          <BtnIconFavorite>
            <use href={`${sprite}#icon-heart`}></use>
          </BtnIconFavorite>
        )}
      </BtnFavorite>

      <CarImg src={advert.img} alt={advert.model} />
      <ContainerMainInfo>
        <Title>
          {advert.make}{' '}
          {advert.model.length <= 8 ? (
            <span style={{ color: '#3470FF' }}>{advert.model}</span>
          ) : (
            ''
          )}
          , {advert.year}
        </Title>
        <Title>{advert.rentalPrice}</Title>
      </ContainerMainInfo>

      <DescriptionList>
        <DescriptionItem>{advert.address.split(',')[1]}</DescriptionItem>
        <DescriptionItem>{advert.address.split(',')[2]}</DescriptionItem>
        <DescriptionItem>{advert.rentalCompany}</DescriptionItem>
      </DescriptionList>
      <DescriptionList>
        <DescriptionItem>{advert.type}</DescriptionItem>
        <DescriptionItem>{advert.model}</DescriptionItem>
        <DescriptionItem>{advert.mileage}</DescriptionItem>
        <DescriptionItem>{advert.accessories[0]}</DescriptionItem>
      </DescriptionList>

      <BtnLearnMore onClick={openModal}>Learn more</BtnLearnMore>

      {showModal && (
        <Modal isOpen={showModal} onClose={closeModal} advert={advert} />
      )}
    </ContainerCard>
  );
};

export default AdvertCard;
