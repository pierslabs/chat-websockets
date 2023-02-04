import React, { useContext } from 'react';
import SideBarItem from './SideBarItem';
import { ChatContext } from '../../context/chat/Chatcontext';
import { AuthContext } from '../../context/auth/AuthContext';

const SideBar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { users } = chatState;

  return (
    <div className="inbox_chat">
      {users
        .filter((user) => user.uid !== auth.uid)
        .map((user) => (
          <SideBarItem key={user.uid} user={user} />
        ))}
      <div className="extra_space"></div>
    </div>
  );
};

export default SideBar;
