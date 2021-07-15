import { ADD_TICKETS, CHANGE_FILTER, CHECKED, GET_ID, GET_TICKETS } from './actions';

export const checked = (name) => ({type: CHECKED, payload: name});
export const changeFilter = (name) => ({type: CHANGE_FILTER, payload: name});
export const addTickets = () => ({type: ADD_TICKETS});

export const getId =  () => async (dispatch) => {
  const res = await fetch(`https://front-test.beta.aviasales.ru/search`);
  const data = await res.json();
  dispatch({type: GET_ID, payload: data.searchId});
};
export const getTickets =  (id) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
    );
    if(!res.ok){
      throw new Error(`Произошла ошибка, код ${res.status}`);
    }
    const data = await res.json();
    dispatch({type: GET_TICKETS, payload: data});
    if(!data.stop){
      dispatch(getTickets(id));
    }
  } catch (error) {
    dispatch(getTickets(id));
  }
};