import { Navigate, Route } from 'react-router-dom';
import AuthRouter from './AuthRouter';

const PublicRoute = ({ isAuthenticated }) => {
  return !isAuthenticated ? <AuthRouter /> : <Navigate to="/" />;
};

export default PublicRoute;
