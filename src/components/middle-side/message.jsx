import React, { useEffect, useState } from 'react';
import '../../assets/scss/middle-side/messages.scss'

const Message = ({ nextMessage, message, typing }) => {
  return (
    <p className="message-item"> {message.message}</p>
  );
};

export default Message;