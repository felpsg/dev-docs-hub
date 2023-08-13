import React, { useState } from 'react';
import axios from 'axios';
import '../assets.js/styles/chat.css';

const GPT_URL = 'https://api.openai.com/v1/chat/completions';
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `#`,
};

const Message = ({ sender, text }) => (
  <div className={sender === 'user' ? 'user-message' : 'bot-message'}>
    {text}
  </div>
);

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => setInput(e.target.value);

  const getResponseFromGPT = async (prompt) => {
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    };
    try {
      const response = await axios.post(GPT_URL, data, { headers: HEADERS });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
      return 'Desculpe, algo deu errado. Tente novamente.';
    }
  };

  const handleSubmit = async () => {
    const userMessage = { sender: 'user', text: input, id: Date.now() };
    setMessages([...messages, userMessage]);
    const botResponse = await getResponseFromGPT(input);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: botResponse, id: Date.now() },
    ]);
    setInput('');
  };

  const startNewChat = () => {
    setInput('');
    setMessages([{ sender: 'bot', text: 'Bem-vindo ao CodeHub! Como posso ajudar?', id: Date.now() }]);
  };

  const clearConversation = () => {
    setInput('');
    setMessages([]);
  };

  return (
    <div className="chat-container">
      <div className="chat-controls">
        <button onClick={startNewChat}>Novo Chat</button>
        <button onClick={clearConversation}>Limpar Conversa</button>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <Message key={message.id} sender={message.sender} text={message.text} />
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
