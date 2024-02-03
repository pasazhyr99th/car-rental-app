import { useState } from 'react';

const AdvertCard = ({ advert, onToggleFavorite }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleFavorite = () => {
    onToggleFavorite(advert.id);
  };

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <img src={advert.img} alt={advert.model} />
      <h3>
        {advert.make} {advert.model}
      </h3>
      <p>{advert.rentalPrice} per hour</p>
      <button onClick={handleToggleFavorite}>
        {advert.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <button onClick={handleLearnMore}>Learn more</button>

      {showModal && (
        <div>
          {/* Modal content with detailed information */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdvertCard;
