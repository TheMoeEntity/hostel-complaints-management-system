"use client";
import "./chat.css";
import { useState, useRef } from "react";
import { useSession } from "next-auth/react";

const Chatscreen = ({ show, close }) => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const formRef = useRef(null);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(messages);
    console.log(input);
    if (input.trim() === "") {
      return;
    }
    setMessages([...messages, { isUser: true, text: input.trim() }]);
    setInput("");
    try {
      const response = await fetch("./api/chat", {
        method: "POST",
        headers: {
          ContentType: "application/json",
        },
        body: JSON.stringify({ message: input, user: "Moses" }),
      });
      const data = await response.json();
      console.log(data);
      const aiMessage =
        data.message || "Sorry, I couldn't understand your message";
      setMessages((prev) => [
        ...prev,
        {
          isUser: false,
          text: aiMessage,
        },
      ]);
    } catch (error) {
      console.error("error fetching AI Response");
    }
  };

  return (
    <div
      style={{ bottom: show ? "0" : "-100%" }}
      className="chat-container open"
    >
      <div onClick={close} className="close">
        &times;
      </div>
      <div className="chat-header">
        <div>Crawford AI ChatBot</div>
      </div>
      <div className="chat-body">
        {messages.map((x, i) => (
          <div
            key={i}
            className={`chat-message ${
              x.isUser ? "user-message" : "ai-message"
            }`}
          >
            <div className="messsage-user-identification">
              <p>
                {x.isUser ? (
                  <span style={{ marginRight: "10px" }}>&#x1F7E2;</span>
                ) : (
                  <span style={{ marginRight: "10px" }}>&#x1F534;</span>
                )}
                <span style={{ marginRight: "10px" }}>&#x1F7E2;</span>
                {x.isUser ? session.user.first_name : "AI Chat"}
              </p>
            </div>
            <p>{x.text}</p>
          </div>
        ))}
      </div>
      <form className="chat-input" ref={formRef} onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          // cols={30}
          // rows={10}
          placeholder="Type messge"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <button className="send-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Chatscreen;
