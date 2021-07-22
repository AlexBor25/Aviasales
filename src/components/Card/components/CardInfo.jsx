import React from 'react';
import PropTypes from 'prop-types';

import style from '../card.module.scss';

import getTimeFromMins from '../../../utils/formatTime';
import stopLength from '../../../utils/stopLength';
import { arrival, departure } from '../../../utils/formatingDate';

function CardInfo({ segment }) {
  const { origin, destination, date, stops, duration } = segment;
  const transfers = stopLength(stops);

  return (
    <div className={style.info}>
      <div className={style.wrapper}>
        <span className={style.descr}>
          {origin} – {destination}
        </span>
        <span className={style.item}>
          {departure(date)} – {arrival(date, duration)}
        </span>
      </div>
      <div className={style.wrapper}>
        <span className={style.descr}>В пути</span>
        <span className={style.item}>{getTimeFromMins(duration)}</span>
      </div>
      <div className={style.wrapper}>
        <span className={style.descr}>{transfers}</span>
        <span className={style.item}>{ stops.join(' ') }</span>
      </div>
    </div>
  );
}

CardInfo.defaultProps = {
  segment: {},
};

CardInfo.propTypes = {
  segment: PropTypes.objectOf(PropTypes.any),
};

export default CardInfo;
