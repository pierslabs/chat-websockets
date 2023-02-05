import { useContext } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { ChatContext } from '../../context/chat/Chatcontext';
import { AuthContext } from '../../context/auth/AuthContext';

import { useForm } from '../../hooks/useForm';

const formData = {
  message: '',
};

const SendMessages = () => {
  const { onInputChange, formState, onResetForm } = useForm(formData);
  const { message } = formState;

  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0) {
      return;
    }

    socket.emit('message-to-user', {
      from: auth.uid,
      to: chatState.chatActive,
      message,
    });

    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            onChange={onInputChange}
            name="message"
            value={message}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendMessages;
