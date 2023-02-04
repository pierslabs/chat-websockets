import { useCallback, createContext, useState } from 'react';
import { fetchAuth, fetchWithOutAuth } from '../helpers/fetchApi';

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchWithOutAuth(
      'auth/login',
      { email, password },
      'POST'
    );

    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { user } = resp;

      setAuth({
        email: user.email,
        uid: user.uid,
        name: user.name,
        logged: true,
        checking: false,
      });
    }

    return { ok: resp.ok, msg: resp.msg || null };
  };

  const register = async (name, email, password) => {
    const resp = await fetchWithOutAuth(
      '/auth/new',
      { name, email, password },
      'POST'
    );

    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { user } = resp;
      setAuth({
        email: user.email,
        uid: user.uid,
        name: user.name,
        logged: true,
        checking: false,
      });
    }
    return { ok: resp.ok, msg: resp.msg || null };
  };

  /* verify token va dentro de un useEffect se utiliza useCallback para evitar que cada 
  vez que se renderice el componente apunte a un nuevo espacio de memoria y eso dispararia
  multiples veces de ese efecto
  */
  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setAuth(initialState);
      return false;
    }

    const resp = await fetchAuth('/auth/refresh');

    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { user } = resp;
      setAuth({
        email: user.email,
        uid: user.uid,
        name: user.name,
        logged: true,
        checking: false,
      });
      return true;
    } else {
      setAuth(initialState);
      return false;
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    setAuth(initialState);
  };

  return (
    <AuthContext.Provider
      value={{ login, register, verifyToken, logOut, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
