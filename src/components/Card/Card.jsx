import React from 'react';
import PropTypes from 'prop-types';

import style from './card.module.scss';

import CardInfo from './components/CardInfo';

function Card({ ticket }) {
  const { price, carrier, segments } = ticket;
  const [segment1, segment2] = segments;

  return (
    <section className={style.card}>
      <div className={style.title}>
        <span className={style.price}>{price} P</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="card-logo" />
      </div>
      <CardInfo segment={segment1} />
      <CardInfo segment={segment2} />
    </section>
  );
}

Card.defaultProps = {
  ticket: {},
};

Card.propTypes = {
  ticket: PropTypes.objectOf(PropTypes.any),
};

export default Card;
