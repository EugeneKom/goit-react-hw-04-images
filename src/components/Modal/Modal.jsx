import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ takeImg, onHideModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onHideModal);
    return () => {
      window.removeEventListener('keydown', onHideModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={takeImg} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  takeImg: PropTypes.string,
  onHideModal: PropTypes.func,
};
