import {
  Overlay,
  ContainerModal,
  BtnClose,
  BtnIconClose,
  Image,
  Title,
  DescriptionContainer,
  DescriptionText,
  DescriptionList,
  DescriptionItem,
  Label,
  ConditionsList,
  ConditionsItem,
  ConditionSpan,
  BtnRental,
} from './Modal.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';

const phoneNumber = '+380730000000';

const Modal = ({ isOpen, onClose, advert }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <Overlay onClick={onClose} data-isopen={isOpen}></Overlay>
      <ContainerModal data-isopen={isOpen}>
        <BtnClose onClick={onClose}>
          <BtnIconClose>
            <use href={`${sprite}#icon-close`}></use>
          </BtnIconClose>
        </BtnClose>

        <Image src={advert.img} alt={advert.model} />

        <Title>
          {advert.make} <span style={{ color: '#3470FF' }}>{advert.model}</span>
          , {advert.year}
        </Title>
        
        <DescriptionContainer>
          <DescriptionList>
            <DescriptionItem>{advert.address.split(',')[1]}</DescriptionItem>
            <DescriptionItem>{advert.address.split(',')[2]}</DescriptionItem>
            <DescriptionItem>Id: {advert.id}</DescriptionItem>
            <DescriptionItem>Year: {advert.year}</DescriptionItem>
            <DescriptionItem>Type: {advert.type}</DescriptionItem>
          </DescriptionList>
          <DescriptionList>
            <DescriptionItem>
              Fuel Consumption: {advert.fuelConsumption}
            </DescriptionItem>
            <DescriptionItem>Engine Size: {advert.engineSize}</DescriptionItem>
          </DescriptionList>
        </DescriptionContainer>
        <DescriptionText>{advert.description}</DescriptionText>

        <Label>Accessories and functionalities:</Label>
        <DescriptionContainer>
          <DescriptionList>
            {advert.accessories.map((item) => (
              <DescriptionItem key={item}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
          <DescriptionList>
            {advert.functionalities.map((item) => (
              <DescriptionItem key={item}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
        </DescriptionContainer>

        <Label>Rental Conditions:</Label>
        <ConditionsList>
          <ConditionsItem>
            Minimum age:{' '}
            <ConditionSpan>
              {advert.rentalConditions.slice(13, 16)}
            </ConditionSpan>
          </ConditionsItem>
          <ConditionsItem>
            {advert.rentalConditions.split('\n')[1]}
          </ConditionsItem>
          <ConditionsItem>
            {advert.rentalConditions.split('\n')[2]}
          </ConditionsItem>
          <ConditionsItem>
            Mileage:{' '}
            <ConditionSpan>
              {advert.mileage.toLocaleString('en-US')}
            </ConditionSpan>
          </ConditionsItem>
          <ConditionsItem>
            Price: <ConditionSpan>{advert.rentalPrice}</ConditionSpan>
          </ConditionsItem>
        </ConditionsList>

        <BtnRental onClick={handleCall}>Rental car</BtnRental>
      </ContainerModal>
    </div>
  );
};

export default Modal;
