import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

require('dotenv').config()


const systemMessage = { 
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
  }


  //hi

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY

  function Chat() {
    const [messages, setMessages] = useState([
      {
        message: "Hello, I'm ChatGPT! Ask me anything!",
        sentTime: "just now",
        sender: "ChatGPT"
      }
    ]);
    const [isTyping, setIsTyping] = useState(false);
  
    const handleSend = async (message) => {
      const newMessage = {
        message,
        direction: 'outgoing',
        sender: "user"
      };
  
      const newMessages = [...messages, newMessage];
      
      setMessages(newMessages);

      setIsTyping(true);
      await processMessageToChatGPT(newMessages);
    };
  
    async function processMessageToChatGPT(chatMessages) {
  
      let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "assistant";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message}
      });
  

      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage, 
          ...apiMessages 
        ]
      }
  
      await fetch("https://api.openai.com/v1/chat/completions", 
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
        setIsTyping(false);
      });
    }
  
    return (
        <div style={{ padding: "30px", height: "650px"  }}>
          <MainContainer>
            <ChatContainer>       
              <MessageList 
                scrollBehavior="smooth" 
                typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder="Ask ChatGPT for resourcess" onSend={handleSend} />        
            </ChatContainer>
          </MainContainer>
        </div>
    )
  }
  
  export default Chat;