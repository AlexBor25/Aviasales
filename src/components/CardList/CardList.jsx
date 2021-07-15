import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Alert } from 'antd';

import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

import filteredTransfers from '../../utils/filteredTransfer';
import filtered from '../../utils/filter';
import { getTickets } from '../../redux/actions/actionCreators';

function CardList() {

  const dispatch = useDispatch();
  const { tickets, ticketSize, checkboxs, activeFilter, id } = useSelector(({ tickets, ticketSize, activeFilter, checkboxs, id }) => ({ activeFilter, ticketSize, tickets, checkboxs, id }));

  React.useEffect(() => {
    if (id) {
      dispatch(getTickets(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const warning = checkboxs.every(checkbox => !checkbox.check);
  const filteredTickets = filtered(filteredTransfers(tickets.data, checkboxs), activeFilter);
  const items = filteredTickets.slice(0, ticketSize).map((ticket) => <Card key={uuid()} ticket={ticket} />);

  return (
    <>
      { warning ? <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" showIcon closable />
      : <>
          {items}
          <Pagination />
      </> }
    </>
  );
}

export default CardList;
