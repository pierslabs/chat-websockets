import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ChatPage } from '../pages';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
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
