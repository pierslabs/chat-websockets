import { useContext } from 'react';
import { ChatContext } from '../../context/chat/Chatcontext';
import { types } from '../../types/types';
import { fetchAuth } from '../../helpers/fetchApi';

const SideBarItem = ({ user }) => {
  const { dispatch, chatState } = useContext(ChatContext);

  const selectChat = async () => {
    dispatch({
      type: types.activeChat,
      payload: user.uid,
    });

    // Load chat messages

    const resp = await fetchAuth(`messages/${user.uid}`);

    dispatch({
      type: types.getRoomMessages,
      payload: resp.msg,
    });
  };

  return (
    <div
      className={`chat_list   
    ${user.uid === chatState.chatActive && 'active_chat'}
   `}
      onClick={selectChat}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarItem;
