import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import style from './card.module.scss';

import getTimeFromMins from '../../utils/formatTime';

function CardInfo({ segment }) {
  const { origin, destination, date, stops, duration } = segment;

  const transfers =
    // eslint-disable-next-line no-nested-ternary
    stops.length === 0 ? `Без пересадок` : stops.length < 2 ? `${stops.length} пересадка` : `${stops.length} пересадки`;

  const transferStops = stops.map((stop) => stop).join(' ');

  const departure = format(new Date(date), 'HH:mm');
  const arrival = format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');

  return (
    <div className={style.info}>
      <div className={style.wrapper}>
        <span className={style.descr}>
          {origin} – {destination}
        </span>
        <span className={style.item}>
          {departure} – {arrival}
        </span>
      </div>
      <div className={style.wrapper}>
        <span className={style.descr}>В пути</span>
        <span className={style.item}>{getTimeFromMins(duration)}</span>
      </div>
      <div className={style.wrapper}>
        <span className={style.descr}>{transfers}</span>
        <span className={style.item}>{transferStops}</span>
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
