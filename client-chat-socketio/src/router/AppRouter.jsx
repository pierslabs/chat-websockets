import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, []);

  if (auth.checking) {
    <h1>Espere porfavor</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />

        <Route path="/auth/*" element={<AuthRouter />} />

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
