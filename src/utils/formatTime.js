function getTimeFromMins(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч : ${minutes < 10 ? `0${  minutes}` : minutes}м`;
}

export default getTimeFromMins;
