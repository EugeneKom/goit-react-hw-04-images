import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  onClickModalOpen,
  largeImage,
  smallImg,
  description,
}) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        onClick={() => {
          onClickModalOpen(largeImage);
        }}
        className={css.imageGalleryItem__image}
        src={smallImg}
        alt={description}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  description: PropTypes.string,
  largeImage: PropTypes.string,
  smallImg: PropTypes.string,
  onClickModalOpen: PropTypes.func,
};
