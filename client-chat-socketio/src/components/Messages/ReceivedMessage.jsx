import { dateHandler } from '../../helpers/dateHandler';

const ReceivedMessage = ({ msg }) => {
  const date = dateHandler(msg.createdAt);
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.message}</p>
          <span className="time_date"> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
