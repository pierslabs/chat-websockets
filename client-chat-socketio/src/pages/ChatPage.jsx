import { useContext } from 'react';
import ChatSelect from '../components/ChatSelect/ChatSelect';
import InboxPeople from '../components/InboxPeople/InboxPeople';
import Messages from '../components/Messages/Messages';
import { ChatContext } from '../context/chat/Chatcontext';
import '../css/chat.css';

const ChatPage = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {chatState.chatActive ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};

export default ChatPage;
