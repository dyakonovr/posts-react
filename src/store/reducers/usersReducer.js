import { SET_USERS_DATA, SET_USERS_ERROR } from '../actions';

const defaultState = {
  data: [],
  dataIsLoaded: false,
  error: "",
}

export const usersReducer = (state = defaultState, action) => {
  const { data, error } = action;

  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, data, dataIsLoaded: true };
    case SET_USERS_ERROR:
      return { ...state, error };
    default:
      return state
  }
};

export function setUsersData(data) {
  return { type: SET_USERS_DATA, data }
}

export function setUsersError(error) {
  return { type: SET_USERS_ERROR, error }
}