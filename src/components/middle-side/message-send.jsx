import { EmojiSmile, Paperclip } from 'react-bootstrap-icons';
import '../../assets/scss/middle-side/messages.scss'

const enterKeyCode = 13;
const MessageSend = ({ sendMessage, onChangeMessage, message }) => {
  const onKeyDown = ({ keyCode }) => {
    if (keyCode !== enterKeyCode) return
    sendMessage();


  }
  return (
    <div className="message-send d-flex">
      <div className="message-send__input">
        <input
          type="text"
          onKeyDown={onKeyDown}
          placeholder="Write a message..."
          id="user-message-input"
          onChange={onChangeMessage} />
      </div>
      <div className="message-send__actions d-flex">
        <EmojiSmile color="#515151" size={20} />
        <Paperclip className="mr-3 ml-3" color="#515151" size={20} />
        <p onClick={sendMessage} disabled={!message}>Send</p>
      </div>
    </div>
  );
};

export default MessageSend;