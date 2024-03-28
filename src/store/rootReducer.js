import { combineReducers } from "redux";

const usersState = {
    users: [],
    loading: true
}
const loginState = {
  loginDetails: {
      DB_USER: '',
      DB_PASS: '',
  },
};


const usersReducer = (state = usersState, actions) => {
    switch (actions.type) {
        case 'users/get':
          return {
            ...state,
            users: actions.payload,
            loading: false,
          };
        case 'user/add':
          return {
            ...state,
            users: [...state.users, actions.payload], 
          };
        default:
          return state;
      }
}

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
    users: usersReducer,
    login: loginReducer,
})

export default rootReducer