import React from 'react';

import style from './transfers.module.scss';

function Transfers() {
  return (
    <section className={style.transfers}>
      <h4 className={style.title}>Количество пересадок</h4>
      <div className={style.wrapper}>
        <label className={style.label}>
          <span className={style.checkbox} />
          <input className={style.input} type="checkbox"/>Все
        </label>
        <label className={style.label}>
          <span className={style.checkbox} />
          <input className={style.input} type="checkbox"/>Без пересадок
        </label>
        <label className={style.label}>
          <span className={style.checkbox} />
          <input className={style.input} type="checkbox"/>1 пересадка
        </label>
        <label className={style.label}>
          <span className={style.checkbox} />
          <input className={style.input} type="checkbox"/>2 пересадки
        </label>
        <label className={style.label}>
          <span className={style.checkbox} />
          <input className={style.input} type="checkbox"/>3 пересадки
        </label>
      </div>
    </section>
  );
}

export default Transfers;