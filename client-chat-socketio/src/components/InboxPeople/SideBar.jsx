import React from 'react';
import SideBarItem from './SideBarItem';

const SideBar = () => {
  const chats = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="inbox_chat">
      {chats.map((chat) => (
        <SideBarItem key={chat} />
      ))}
      <div className="extra_space"></div>
    </div>
  );
};

export default SideBar;
