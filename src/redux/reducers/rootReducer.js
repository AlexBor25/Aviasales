import {
  ADD_TICKETS,
  CHANGE_FILTER,
  CHECKED,
  GET_ID,
  GET_TICKETS,
} from '../actions/actions';

const initialState = {
  tickets: {
    data: [],
  },
  id: null,
  checkboxs: [
    { label: 'Все', name: 'all', check: true },
    { label: 'Без пересадок', name: 'no', check: true, value: 0 },
    { label: '1 пересадка', name: 'one', check: true, value: 1 },
    { label: '2 пересадки', name: 'two', check: true, value: 2 },
    { label: '3 пересадки', name: 'three', check: true, value: 3 },
  ],
  filters: [
    { label: 'Самый дешевый', name: 'cheap' },
    { label: 'Самый быстрый', name: 'faster' },
    { label: 'Оптимальный', name: 'optimal'  },
  ],
  activeFilter: 'cheap',
  ticketSize: 5,
  error: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID: {
      return { ...state, id: action.payload }
    }
    case GET_TICKETS: {
      return {
        ...state,
        tickets: { ...state.tickets, stop: action.payload.stop, data: [...state.tickets.data, ...action.payload.tickets ] }
      }
    }
    case CHECKED: {
      if(action.payload === 'all'){
        return {...state, ticketSize: 5, checkboxs: state.checkboxs.map(el => ({...el, check: !state.checkboxs[0].check}))};
      }
      const newState = { ...state, ticketSize: 5, checkboxs: state.checkboxs.map(el => action.payload === el.name ? { ...el, check: !el.check } : el) }
      newState.checkboxs[0].check = newState.checkboxs.slice(1).every(el => el.check)
      return newState
    }
    case CHANGE_FILTER: {
      return { ...state, ticketSize: 5, activeFilter: action.payload }
    }
    case ADD_TICKETS: {
      return { ...state, ticketSize: state.ticketSize + 5 }
    }
    default:
      return state;
  }
}

export default rootReducer;
