'use strict';
const initialState = {
  logined: false
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {logined: true};
    case 'LOGOUT':
      return {logined: false};
    default:
      return state;
  }
};

export default userReducer;
