import { useCallback, useRef } from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  log: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = (email, password) => {};

  const register = (name, email, password) => {};

  /* verify token va dentro de un useEffect se utiliza useCallback para evitar que cada 
  vez que se renderice el componente apunte a un nuevo espacio de memoria y eso dispararia
  multiples veces de ese efecto
  */
  const verifyToken = useCallback(() => {}, []);

  const logOut = () => {};

  return (
    <AuthContext.Provider value={{ login, register, verifyToken, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
