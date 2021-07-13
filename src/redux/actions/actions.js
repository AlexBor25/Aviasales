export const CHECKED = "CHECKED";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const GET_TICKETS = "GET_TICKETS";
export const GET_ID = "GET_ID";

export const checked = (name) => ({type: CHECKED, payload: name});
export const changeFilter = (name) => ({type: CHANGE_FILTER, payload: name});

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
    console.log(data);
    dispatch({type: GET_TICKETS, payload: data});
  } catch (error) {
    console.log(error)
  }
};

