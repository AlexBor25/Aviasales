import React from 'react';
import { useSelector } from 'react-redux';

import style from './transfers.module.scss';

import TransfersInput from './components/TransfersInput';

function Transfers() {
  const { checkboxs } = useSelector((state) => state);
  const items = checkboxs.map((item) => (
    <TransfersInput
      key={item.name}
      name={item.name}
      label={item.label}
      check={item.check} /> ));

  return (
    <section className={style.transfers}>
      <h4 className={style.title}>Количество пересадок</h4>
      <div className={style.wrapper}>{items}</div>
    </section>
  );
}

export default Transfers;
