import React from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  inputValue: string;
  setInputValue: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onClose: () => void;
  onClearChat: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement> | null;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  inputValue,
  setInputValue,
  onSendMessage,
  onKeyPress,
  onClose,
  onClearChat,
  messagesEndRef
}) => {
  return (
    <div className='chatbot-window'>
      <div className='chat-interface'>
        <div className='chat-header'>
          <div className='chat-title'>
            <div className='chat-avatar'></div>
            <div>
              <h3>J.A.R.V.I.S.</h3>
              <p>Sistema Activo</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className='clear-button' onClick={onClearChat}>
              Borrar
            </button>
            <button className='close-button' onClick={onClose}>
              
            </button>
          </div>
        </div>
        
        <div className='chat-messages'>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`message ${message.isUser ? 'user' : 'bot'}`}
            >
              <div className='message-content'>
                {message.text}
              </div>
              <div className='message-time'>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className='chat-input'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder='Escribe tu comando...'
            className='message-input'
          />
          <button onClick={onSendMessage} className='send-button'>
            
          </button>
        </div>
      </div>
    </div>
  );
};
