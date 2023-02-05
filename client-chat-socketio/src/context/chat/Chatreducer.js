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

    case types.newMessage:
      if (
        state.chatActive === action.payload.from ||
        state.chatActive === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }

    case types.getRoomMessages:
      return {
        ...state,
        messages: action.payload,
      };

    case types.closeSession:
      return {
        uid: '',
        chatActive: null,
        users: [],
        messages: [],
      };

    default:
      return state;
  }
};
