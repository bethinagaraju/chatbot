
import axios from "axios";

async function fetchAnswer(prompt, convHistory, typeOfChat) {
  try {
    console.log(convHistory);
    let history = "";

    if (convHistory.length > 0) {
      convHistory.forEach((item) => {
        history += `User: ${item.user}\nBot: ${item.bot}\n`;
      });
    }

    history += `User: ${prompt}\n`;

    let toneInstruction = "";
    if (typeOfChat === "casual") {
      toneInstruction = "Respond in a fun, laid-back, and informal way.";
    } else if (typeOfChat === "friendly") {
      toneInstruction = "Respond in a warm, cheerful, and engaging manner.";
    } else if (typeOfChat === "professional") {
      toneInstruction = "Respond in a formal, concise, and professional manner.";
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCZdbexw8-79pcrTQ5qVpZilad2ZlqpjqU`;

    const response = await axios.post(url, {
      contents: [
        {
          parts: [
            {
              text: `Based on the previous conversation history, respond to the prompt with the following tone: ${toneInstruction}\n\n${history}`,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 200, 
      },
    });

    const data = response.data;
    if (data.candidates) {
      return data.candidates[0]?.content?.parts[0]?.text || "No response from AI";
    } else {
      throw new Error("Invalid API Response");
    }
  } catch (error) {
    console.error("API Error:", error);
    return "Failed to fetch response";
  }
}

export default fetchAnswer;
