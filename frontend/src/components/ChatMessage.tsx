import React from "react";
import { List } from "antd";

type ChatMessageProps = {
  sender: "user" | "bot";
  text: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => (
  <List.Item style={{ textAlign: sender === "user" ? "right" : "left" }}>
    <strong>{sender === "user" ? "You" : "Bot"}:</strong> {text}
  </List.Item>
);

export default ChatMessage;
