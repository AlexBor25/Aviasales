import React from 'react';

import style from './pagination.module.scss';

function Pagination() {
  return (
    <div className={style.wrapper}>
      <button type='button' className={style.btn}>Показать еще 5 билетов!</button>
    </div>
  );
}

export default Pagination;