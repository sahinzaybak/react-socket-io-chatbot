import { EmojiSmile, Paperclip } from 'react-bootstrap-icons';
import '../../assets/scss/chat/messages.scss'

const MessageSend = ({ sendMessage, onChangeMessage, message }) => {
  const onKeyDown = ({ keyCode }) => {
    if (keyCode !== 13) return
    sendMessage();
  }
  return (
    <div className="message-send d-flex">
      <div className="message-send__input">
        <input
          autoFocus
          id="message-send-input"
          type="text"
          onKeyDown={onKeyDown}
          placeholder="Write a message..."
          onChange={onChangeMessage} />
      </div>
      <div className="message-send__actions d-flex pr-4 mr-1">
        <EmojiSmile
          color="#515151"
          size={20} />
        <Paperclip
          className="mr-3 ml-3"
          color="#515151"
          size={20} />
        <button onClick={sendMessage} disabled={message == ""}>Send</button>
      </div>
    </div>
  );
};

export default MessageSend;