import css from './Button.module.css';
import PropTypes from 'prop-types';
export const LoadButton = ({ onLoadMore }) => {
  return (
    <>
      <button className={css.button} type="submit" onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
};

LoadButton.propTypes = {
  onLoadMore: PropTypes.func,
};
