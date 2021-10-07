import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import io from 'socket.io-client';
import config from '../../bottyConfig';
import useSound from 'use-sound';

//Components
import Messages from './message'
import MessageSend from './message-send'
import Typing from './typing';

//Actions
import { fetchLastMessage } from '../../store/actions/lastMessage'

const socket = io(config.BOTTY_SERVER_API, { transports: ['websocket', 'polling', 'flashsocket'] });
function scrollToLastMessages() {
	const list = document.getElementById('message-list');
	list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
}
const MessageList = () => {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([{ message: "Hi! My name's Botty!" }]);
	const [typing, setTyping] = useState(false);
	const [playSendSound] = useSound("wp-send.mp3");
	const [playAnswerSound] = useSound("wp-answer.mp3");
	const dispatch = useDispatch()

	useEffect(() => {
		socket.on('bot-typing', () => {
			setTyping(true);
			scrollToLastMessages();
		});
	}, []);

	useEffect(() => {
		socket.off('bot-message');
		socket.on('bot-message', (message) => {
			setTyping(false);
			setMessages([...messages, { message }]);
			playAnswerSound();
			scrollToLastMessages();
		});
		const lastMessage = [...messages]
		dispatch(fetchLastMessage(lastMessage.reverse()[0]))
	}, [messages]);

	const sendMessage = useCallback(() => {
		setMessages([...messages, { message }]);
		socket.emit('user-message', message);
		playSendSound();
		scrollToLastMessages();
	}, [messages, message]);

	const onChangeMessage = ({ target: { value } }) => {
		setMessage(value)
	};

	return (
		<>
			<div className="message" id="message-list">
				{messages.map((message, index) => (
					<Messages message={message} nextMessage={messages[index + 1]} typing={typing} />
				))}
				{typing ? <Typing /> : ""}
			</div>
			<MessageSend message={message} sendMessage={sendMessage} onChangeMessage={onChangeMessage} />
		</>
	)
}

export default MessageList;
