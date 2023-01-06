import { PropTypes } from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <button
      className={css.button}
      onClick={onLoadMore}
      type="button">
      Load more...
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

