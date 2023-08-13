import React, { useState } from 'react';
import axios from 'axios';
import '../assets.js/styles/chat.css';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => setInput(e.target.value);

  const getResponseFromGPT = async (prompt) => {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `#`,
    };
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    };
    try {
      const response = await axios.post(url, data, { headers: headers });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
      return null;
    }
  };

  const handleSubmit = async () => {
    setMessages([...messages, { sender: 'user', text: input }]);
    const botResponse = await getResponseFromGPT(input);
    if (botResponse) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botResponse },
      ]);
    }
    setInput('');
  };

  const startNewChat = () => {
    setInput('');
    setMessages([
      { sender: 'bot', text: 'Bem-vindo ao CodeHub! Como posso ajudar?' },
    ]);
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
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === 'user' ? 'user-message' : 'bot-message'
            }
          >
            {message.text}
          </div>
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
