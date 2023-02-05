import { types } from '../../types/types';

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoaded:
      return {
        ...state,
        users: action.payload,
      };
    case types.activeChat:
      if (state.chatActive === action.payload) return state;
      return {
        ...state,
        chatActive: action.payload,
        messages: [],
      };

    default:
      return state;
  }
};
