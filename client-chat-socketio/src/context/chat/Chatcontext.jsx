import { createContext, useReducer } from 'react';
import { chatReducer } from './Chatreducer';

export const ChatContext = createContext();

const initialState = {
  uid: '',
  chatactive: null,
  users: [],
  messages: [],
};

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
