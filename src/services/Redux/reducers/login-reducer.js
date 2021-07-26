import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  token: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {LoginSuccess: true, data: action.payload};
    case LOGIN_FAIL:
      return {LoginSuccess: false, error: action.payload};
    default:
      return state;
  }
};
