"use client";
import "./chat.css";
import { useState, useRef, KeyboardEventHandler, FormEvent } from "react";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { Helpers } from "@/Helpers/Types";
type messageType = {
  isUser: boolean;
  text: string;
};
const Chatscreen = ({ show, close }: any) => {
  const { data: session, update } = useSession();
  const [messages, setMessages] = useState<messageType[]>([]);
  const [input, setInput] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (formRef.current) {
      if (e.key === "Enter" && !e.shiftKey) {
        formRef.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      enqueueSnackbar("Error fetching AI Response", {
        variant: "success",
      });
    }
  };

  const handleClose = async () => {
    setMessages([]);
    close();
    const found: messageType | undefined = messages.find((x) => {
      const isFound = x.text.includes("Thank you for lodging");
      return isFound;
    });

    if (!found) {
    }
    if (messages.length > 0 && found !== undefined) {
      close();
      let accessToken;

      try {
        accessToken = session?.user.access;
        await fetch("./api/create/", {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
          body: JSON.stringify({
            title: "AI response",
            description: messages[messages.length - 2].text,
            is_resolved: false,
          }),
        }).then(async (res) => {
          const isJson = res.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson ? await res.json() : null;
          if (res.status == 401) {
            if (session) {
              const newToken = await Helpers.getRefreshClient(session);

              await update({
                ...session,
                user: {
                  ...session?.user,
                  access: newToken.access,
                },
              });
              await fetch("./api/create/", {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + newToken.access,
                },
                body: JSON.stringify({
                  title: "plumbing",
                  description: messages[messages.length - 2].text,
                  is_resolved: false,
                }),
              });
            }
          }
          if (!res.ok) {
            const error = (data && data.message) || res.statusText;

            enqueueSnackbar(
              "Failed to send complaints: " + JSON.parse(data).message,
              {
                variant: "error",
              }
            );
            return Promise.reject(error);
          } else if (res.ok || res.status === 201 || res.status === 200) {
            enqueueSnackbar(
              "Your complaints have been successfully lodged and is being processed.",
              {
                variant: "success",
              }
            );
          }
        });
      } catch (error) {
        enqueueSnackbar("Failed to send complaints: " + error, {
          variant: "error",
        });
      }
    }
  };

  return (
    <div
      style={{ bottom: show ? "0" : "-150%" }}
      className="chat-container open"
    >
      <div onClick={handleClose} className="close">
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
                {x.isUser ? session?.user.first_name : "AI Chat"}
              </p>
            </div>
            <p className="chatBox" style={{ paddingTop: "10px" }}>
              {x.text}
            </p>
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
