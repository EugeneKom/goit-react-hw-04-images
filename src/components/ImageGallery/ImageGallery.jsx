import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imgCards, onClickModalOpen }) => {
  return (
    <ul className={css.imageGallery}>
      {imgCards.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            description={tags}
            onClickModalOpen={onClickModalOpen}
            largeImage={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgCards: PropTypes.arrayOf(PropTypes.object),
  onClickModalOpen: PropTypes.func,
};
