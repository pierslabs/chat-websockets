import { createContext } from 'react';
import { useSocket } from '../hooks/useSockets';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(import.meta.env.VITE_SOCKET_URL);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
