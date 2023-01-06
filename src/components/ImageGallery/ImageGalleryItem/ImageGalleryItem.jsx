import { PropTypes } from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ item: { tags, webformatURL }, id, onModal }) => {
  return (
    <li className={css.galleryItem}
      onClick={() => {
        onModal(id);
      }}
    >
      <img src="webformatURL" alt="tags" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  onModal: PropTypes.func,
};
