import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoutes';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);
  console.log(auth.checking);

  useEffect(() => {
    verifyToken();
    console.log('render');
  }, [verifyToken]);

  if (auth.checking) {
    <h1>Espere porfavor</h1>;
  }

  console.log(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={auth.logged} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={auth.logged} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
