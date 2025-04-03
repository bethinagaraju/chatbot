
import React from 'react';
import MessageBubble from './MessageBubble';
import { ListGroup } from 'react-bootstrap';

function MessageList({ messages, messagesEndRef }) {
  return (
    <ListGroup className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
      {messages.map((message) => (
        <ListGroup.Item
          as="div"
          key={message.id}
          className="border-0 bg-transparent p-0"
        >
          <MessageBubble
            text={message.text}
            sender={message.sender}
          />
        </ListGroup.Item>
      ))}
   
      <div ref={messagesEndRef} />
    </ListGroup>
  );
}

export default MessageList;


