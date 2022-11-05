import { SET_USERS_DATA, SET_USERS_ERROR } from './actions';

const defaultState = {
  users: [],
  dataIsLoaded: false,
  error: "",
}

export const usersReducer = (state = defaultState, action) => {
  const { users, error } = action;

  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, users, dataIsLoaded: true };
    case SET_USERS_ERROR:
      return { ...state, error };
    default:
      return state
  }
};

export function setUsersData(users) {
  return { type: SET_USERS_DATA, users }
}

export function setUsersError(error) {
  return { type: SET_USERS_ERROR, error }
}