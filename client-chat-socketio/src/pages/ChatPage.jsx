import ChatSelect from '../components/ChatSelect/ChatSelect';
import InboxPeople from '../components/InboxPeople/InboxPeople';
import Messages from '../components/Messages/Messages';
import '../css/chat.css';

const selectUser = false;
const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {!selectUser ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};

export default ChatPage;
