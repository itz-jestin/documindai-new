import { useState } from "react";

function ChatBox() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://Jestin12-pdf-text-extractor.hf.space/ask-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: question,
          }),
        }
      );
      console.log("HTTP Status:", response.status);
      const data = await response.json();

      console.log("Full Response Object");
      console.log(data);
      
      console.log("Answer:");
      console.log(data.answer);
      
      setMessages([
        ...messages,
        {
          role: "user",
          text: question
        },
        {
          role: "assistant",
          text: data.answer
        }
]);
setQuestion("");
setLoading(false);

    } catch (error) {
      console.error(error);
      setLoading(false);
      setMessages([
        ...messages,
        {
          role: "assistant",
          text: "Error getting answer."
        }
      ]);
    }
  };

  return (
    <div>
      <h2>Ask PDF</h2>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask anything about your PDF..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

  
        <button onClick={askQuestion} disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>  

      {loading && (
        <p className="thinking">🤖 Analyzing document...</p>
    )}

    <div className="chat-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={
            msg.role === "user"
              ? "user-message"
              : "ai-message"
          }
        >
          {msg.text}
        </div>
      ))}
    </div>
    </div>
  );
}

export default ChatBox;