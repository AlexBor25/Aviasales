import React from 'react';
import PropTypes from 'prop-types';

import style from '../filters.module.scss';

const FiltersBtn = ({ label, name, active, changeFilters }) => {
  const isActive = active === name ? `${style.active}` : `${style.btn}`;

  return (
    <div className={style.wrapper}>
      <button onClick={changeFilters} className={isActive} name={name} type="button">
        {label}
      </button>
    </div>
  );
};

FiltersBtn.defaultProps = {
  label: '',
  name: '',
  active: 'cheap',
  changeFilters: () => {},
};

FiltersBtn.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.string,
  changeFilters: PropTypes.func,
};

export default FiltersBtn;
