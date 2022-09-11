import { ADD_USER } from "../actions/types";

const INITIAL_STATE = {
  user: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { user } = state;

  switch (action.type) {
    case ADD_USER:
      user.push(action.payload);

      return { user };

    default:
      return state;
  }
};
