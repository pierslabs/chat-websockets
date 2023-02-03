import ReceivedMessage from './ReceivedMessage';
import SendedMessage from './SendedMessage';
import SendMessages from './SendMessages';

const messages = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const Messages = () => {
  return (
    <div className="mesgs">
      <div className="msg_history">
        {messages.map((messages) =>
          messages % 2 ? (
            <ReceivedMessage key={messages} />
          ) : (
            <SendedMessage key={messages} />
          )
        )}
      </div>
      <SendMessages />
    </div>
  );
};

export default Messages;
