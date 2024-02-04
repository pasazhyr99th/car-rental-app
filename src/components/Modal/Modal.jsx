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
  BtnRental,
} from './Modal.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';

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

  return (
    <div>
      <Overlay onClick={onClose} isOpen={isOpen}>
        <ContainerModal isOpen={isOpen}>
          <BtnClose onClick={onClose}>
            <BtnIconClose>
              <use href={`${sprite}#icon-close`}></use>
            </BtnIconClose>
          </BtnClose>
          <Image src={advert.img} alt={advert.model} />
          <Title>
            {advert.make}{' '}
            <span style={{ color: '#3470FF' }}>{advert.model}</span>,{' '}
            {advert.year}
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
              <DescriptionItem>
                Engine Size: {advert.engineSize}
              </DescriptionItem>
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
          <ul>
            <li>
              Minimum age: <span>{advert.rentalConditions.slice(13, 16)}</span>
            </li>
            <li>{advert.rentalConditions.split('\n')[1]}</li>
            <li>{advert.rentalConditions.split('\n')[2]}</li>
            <li>
              Mileage: <span>{advert.mileage.toLocaleString('en-US')}</span>
            </li>
            <li>
              Price: <span>{advert.rentalPrice}</span>
            </li>
          </ul>
          <BtnRental href="tel:+380730000000">Rental car</BtnRental>
        </ContainerModal>
      </Overlay>
    </div>
  );
};

export default Modal;
