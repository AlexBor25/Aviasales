import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Card from '../Card/Card';
import { getId, getTickets } from '../../redux/actions/actions';
import filtered from '../../utils/filter';
import filteredTransfers from '../../utils/filteredTransfer';

function CardList() {
  const dispatch = useDispatch();
  const { tickets, checkboxs, id, activeFilter } = useSelector(({ tickets, id, activeFilter, checkboxs }) => ({ activeFilter, tickets, id, checkboxs }));

  React.useEffect(() => {
    dispatch(getId());
  }, [dispatch]);

  React.useEffect(() => {
    if (id) {
      dispatch(getTickets(id));
    }
  }, [dispatch, id]);

  const filteredTickets = filtered(filteredTransfers(tickets, checkboxs), activeFilter);

  const items = filteredTickets.slice(0, 5).map((ticket) => <Card key={uuid()} ticket={ticket} />);

  return <>{items}</>;
}

export default CardList;
