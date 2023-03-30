import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImg } from 'components/API/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadButton } from './Button/Button';
import css from './App.module.css';
import { ColorRing } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
// eslint-disable-next-line no-unused-vars
import { Element, animateScroll as scroll, scroller } from 'react-scroll';

export const App = () => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(2);
  const [dataImgs, setDataImgs] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [link, setLink] = useState('');
  const [totalImg, setTotalImg] = useState(0);

  const loadImg = (value, page) => {
    setIsLoad(true);
    getImg(value, page)
      .then(data => {
        setTotalImg(data.total);
        if (data.hits.length === 0) {
          alert('no matching images');
        }
        return data.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return setDataImgs(prevData => [
            ...prevData,
            { id, webformatURL, largeImageURL, tags },
          ]);
        });
      })
      .finally(() => {
        setIsLoad(false);
      });
  };

  const onSubmit = value => {
    if (value.trim() === '') {
      return;
    }
    setPage(2);
    setValue(value);

    setDataImgs([]);
    loadImg(value);
    console.log(value);
  };

  const onLoadMore = () => {
    setPage(page + 1);
    loadImg(value, page);
    scroller.scrollTo('myScrollToElement', {
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuint',
      offset: 1500,
    });
  };

  const onHideModal = evt => {
    console.log(evt);
    if (evt.code === 'Escape') {
      setIsModal(false);
    }
  };

  const onClickModalOpen = img => {
    setLink(img);
    setIsModal(true);
  };
  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      <ImageGallery onClickModalOpen={onClickModalOpen} imgCards={dataImgs} />
      {isLoad && (
        <div className={css.loadingWrapper}>
          <ColorRing />
        </div>
      )}
      {dataImgs.length !== 0 && !isLoad && totalImg !== dataImgs.length && (
        <Element className={css.scrollEl} name="myScrollToElement">
          <LoadButton onLoadMore={onLoadMore} />
        </Element>
      )}
      {isModal && <Modal takeImg={link} onHideModal={onHideModal} />}
    </div>
  );
};
