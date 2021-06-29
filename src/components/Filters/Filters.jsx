import React from 'react';

import style from './filters.module.scss';

function Filters() {
  return (
    <section className={style.filters}>
      <div className={style.wrapper}>
        <button className={style.btn} type='button'>Самый дешевый</button>
      </div>
      <div className={style.wrapper}>
        <button className={style.btn} type='button'>Самый быстрый</button>
      </div>
      <div className={style.wrapper}>
        <button className={style.btn} type='button'>Оптимальный</button>
      </div>
    </section>
  );
}

export default Filters;