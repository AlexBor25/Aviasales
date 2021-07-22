import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './filters.module.scss';

import FiltersBtn from './components/FiltersBtn';

import { changeFilter } from '../../redux/actions/actionCreators';

function Filters() {
  const { filters, activeFilter } = useSelector((state) => state);
  const [filter, setFilter] = React.useState(activeFilter);
  const dispatch = useDispatch();

  const changeFilters = (event) => {
    setFilter(event.target.name);
    dispatch(changeFilter(event.target.name));
  };

  const btns = filters.map((btn) => (
    <FiltersBtn
      key={btn.name}
      active={filter}
      changeFilters={changeFilters}
      name={btn.name}
      label={btn.label} />));

  return <section className={style.filters}>{btns}</section>;
}

export default Filters;
