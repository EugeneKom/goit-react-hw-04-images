import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setValue(value);
  };

  const searchForm = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };
  return (
    <header className={css.searchbar}>
      <form className="form" onSubmit={searchForm}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};
