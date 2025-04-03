
export const saveChatHistory = (messages) => {
    try {
      console.log("Saving chat history:", messages); 
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat history to localStorage:', error);
    }
  };
  

  export const loadChatHistory = () => {
    try {
      const savedMessages = localStorage.getItem('chatHistory');
      
      if (!savedMessages) {
        console.log("No chat history found, returning empty array.");
        return [];
      }
  
      const parsedMessages = JSON.parse(savedMessages);
  
 
      if (!Array.isArray(parsedMessages)) {
        console.warn("Chat history is not an array, resetting.");
        localStorage.removeItem('chatHistory');
        return [];
      }
  
      console.log("Loaded saved messages:", parsedMessages);
      return parsedMessages;
    } catch (error) {
      console.error('Error loading chat history from localStorage:', error);
      return [];
    }
  };
  

  export const clearChatHistory = () => {
    try {
      localStorage.removeItem('chatHistory');
      console.log("Chat history cleared.");
    } catch (error) {
      console.error('Error clearing chat history from localStorage:', error);
    }
  };
  