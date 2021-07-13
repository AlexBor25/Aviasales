import React from 'react';
import { useDispatch } from 'react-redux';

import style from './pagination.module.scss';
import { addTickets } from '../../redux/actions/actions';

function Pagination() {
  const dispatch = useDispatch();
  const addTicketsOnPage = () => dispatch(addTickets());

  return (
    <div className={style.wrapper}>
      <button type='button' onClick={addTicketsOnPage} className={style.btn}>Показать еще 5 билетов!</button>
    </div>
  );
}

export default Pagination;