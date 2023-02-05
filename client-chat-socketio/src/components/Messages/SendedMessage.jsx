import { dateHandler } from '../../helpers/dateHandler';

const SendedMessage = ({ msg }) => {
  const date = dateHandler(msg.createdAt);

  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.message}</p>
        <span className="time_date"> {date}</span>
      </div>
    </div>
  );
};

export default SendedMessage;
