// eslint-disable-next-line no-nested-ternary
const stopLength = (arr) => arr.length === 0 ? `Без пересадок` : arr.length < 2 ? `${arr.length} пересадка` : `${arr.length} пересадки`;

export default stopLength;