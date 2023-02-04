import { AuthProvider } from './context/auth/AuthContext';
import { ChatProvider } from './context/chat/Chatcontext';
import { SocketProvider } from './context/SocketContext';
import AppRouter from './router/AppRouter';

const ChatApp = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
};

export default ChatApp;
