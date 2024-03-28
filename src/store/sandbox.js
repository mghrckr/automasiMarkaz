

const BASE_URL = `http://192.168.127.112:2810`




export const loginUser = (DB_USER, DB_PASS) => {
  return async dispatch => {
    try {
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          DB_USER,
          DB_PASS,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
      dispatch({
        type: 'user/login',
        payload: {
          DB_USER,
          DB_PASS,
        },
      });
      const data = await response.json();
      localStorage.setItem('access_token', data.msg.access_token)
      localStorage.setItem('access_user', data.msg.access_user)
    } catch (error) {
      console.log(error.message);
    }
  };
};




import { combineReducers } from "redux";

const loginState = {
  loginDetails: {
      DB_USER: '',
      DB_PASS: '',
  },
};

const loginReducer = (state = loginState, actions) => {
  switch (actions.type) {
      case 'user/login':
          return {
              ...state,
              loginDetails: actions.payload,
          };
      default:
          return state;
  }
};


const rootReducer = combineReducers({
    login: loginReducer,
})

export default rootReducer