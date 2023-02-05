import { useContext, createContext, useEffect } from 'react';

import { useSocket } from '../hooks/useSockets';
import { AuthContext } from './auth/AuthContext';
import { ChatContext } from './chat/Chatcontext';

import { types } from '../types/types';
import { scrollToBottomAnimated } from '../helpers/react-scroll-lib';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket();
  const { auth } = useContext(AuthContext);
  const { dispatch, state } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      console.log('connected');
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  useEffect(() => {
    socket?.on('get', (users) => {
      dispatch({
        type: types.usersLoaded,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('message-to-user', (msg) => {
      dispatch({
        type: types.newMessage,
        payload: msg,
      });
      scrollToBottomAnimated('messagesList');
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
