import '../../assets/scss/chat/messages.scss'

const Message = ({message }) => {
  return (
    <p className={`message-item ${message.user === "me" ? "message-item__me" : ""}`}> {message.message}</p>
  );
};

export default Message;