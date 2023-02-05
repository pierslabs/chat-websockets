import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { ChatContext } from '../../context/chat/Chatcontext';
import ReceivedMessage from './ReceivedMessage';
import SendedMessage from './SendedMessage';
import SendMessages from './SendMessages';

const Messages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="mesgs">
      <div id="messagesList" className="msg_history">
        {chatState.messages.map((message) =>
          message.to === auth.uid ? (
            <ReceivedMessage key={message._id} msg={message} />
          ) : (
            <SendedMessage key={message._id} msg={message} />
          )
        )}
      </div>
      <SendMessages />
    </div>
  );
};

export default Messages;
