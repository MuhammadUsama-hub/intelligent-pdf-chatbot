import React, { useState } from "react";
import { Layout, Typography, Divider } from "antd";
import FileUploader from "../components/FileUploader";
import ChatBox from "../modules/chat/ChatBox";

const { Header, Content } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Title style={{ color: "white", margin: 0 }} level={3}>
          Intelligent PDF Chatbot
        </Title>
      </Header>
      <Content style={{ padding: 32 }}>
        <FileUploader onUploadSuccess={() => setUploaded(true)} />
        <Divider />
        {uploaded && <ChatBox />}
      </Content>
    </Layout>
  );
};

export default Home;
