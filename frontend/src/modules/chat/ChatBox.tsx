import React, { useState } from "react";
import { Input, Button, List, message, Spin } from "antd";
import ChatMessage from "../../components/ChatMessage";
import { askQuestion } from "./chatAPI";

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setLoading(true);
    try {
      const data = await askQuestion(input);
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: data.answer || "No answer found." },
      ]);
    } catch {
      message.error("Failed to get response.");
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div>
      <List
        dataSource={messages}
        renderItem={(msg) => <ChatMessage {...msg} />}
        style={{ marginBottom: 16, maxHeight: 300, overflowY: "auto" }}
      />
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 90px)" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPressEnter={handleSend}
          disabled={loading}
        />
        <Button type="primary" onClick={handleSend} loading={loading}>
          Send
        </Button>
      </Input.Group>
      {loading && <Spin style={{ marginTop: 8 }} />}
    </div>
  );
};

export default ChatBox;
