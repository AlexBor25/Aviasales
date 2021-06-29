import React from 'react';

import style from './card.module.scss';
import cardLogo from "../../assets/img/S7 Logo.png";

function Card() {
  return (
    <section className={style.card}>
      <div className={style.title}>
        <span className={style.price}>13 400 P</span>
        <img src={cardLogo} alt="card-logo"/>
      </div>
      <div className={style.info}>
        <div className={style.wrapper}>
          <span className={style.descr}>MOW – HKT</span>
          <span className={style.item}>10:45 – 08:00</span>
          <span className={style.descr}>MOW – HKT</span>
          <span className={style.item}>10:45 – 08:00</span>
        </div>
        <div className={style.wrapper}>
          <span className={style.descr}>В пути</span>
          <span className={style.item}>21ч 15м</span>
          <span className={style.descr}>В пути</span>
          <span className={style.item}>21ч 15м</span>
        </div>
        <div className={style.wrapper}>
          <span className={style.descr}>2 пересадки</span>
          <span className={style.item}>HKG, JNB</span>
          <span className={style.descr}>2 пересадки</span>
          <span className={style.item}>HKG, JNB</span>
        </div>
      </div>
    </section>
  );
}

export default Card;