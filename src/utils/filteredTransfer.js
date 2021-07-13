const filteredTransfers = (tickets, transfers) => {
  const checkedTrans = transfers.filter(transfer => transfer.check);
  const all = checkedTrans.some(transf => transf.name === 'all');
  if (all) {
    return tickets;
  }

  return tickets.filter(ticket => {
    const stops = ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    return checkedTrans.some(check => stops === check.value);
  });
}

export default filteredTransfers;