import { useContext, createContext, useEffect } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSockets';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket();

  const { auth } = useContext(AuthContext);
  const { connectSocket, disconnectSocket } = useSocket();

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
