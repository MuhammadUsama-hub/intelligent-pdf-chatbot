🧠 Intelligent PDF Chat Backend 📄💬

Welcome to the backend of Intelligent PDF Chat – a Retrieval-Augmented Generation (RAG) based system that lets you chat with your PDFs! 🚀
Upload a PDF, and we’ll do the heavy lifting: parse it, embed it, store it in a vector DB, and allow you to have natural conversations with its content. 🤖

🛠️ Features
📄 PDF Uploading – Seamlessly upload your PDFs to the backend.

🧠 RAG-Powered – Uses Retrieval-Augmented Generation to answer your questions accurately.

🗂️ Vector DB Integration – Stores and retrieves document embeddings using a vector database.

💬 Chat Interface Ready – Easily connect with a frontend to start chatting with your documents.

🧱 Tech Stack
Node.js – Backend runtime

Express – Web framework

Pinecone  – Vector database integration

OpenAI  – LLMs for answering questions

PDF Parser (pdf-parse ) – For extracting text from PDFs

⚙️ How It Works
📤 Upload PDF – User sends a PDF file to the backend.

🔍 Extract Text – Text is parsed from the PDF.

📐 Embed – Text chunks are embedded using an embedding model.

🧱 Store in Vector DB – Embeddings are stored in a vector database.

🤖 Chat – User sends a question, the backend retrieves relevant chunks and feeds them to an LLM to generate a response.

🚀 Getting Started

<pre> 
	bash git clone https://github.com/your-username/intelligent-pdf-chat-backend.git 
	cd intelligent-pdf-chat-backend 
	npm install 
	npm run dev 
</pre>


Add your environment variables in a .env file:
<pre>
	OPENAI_API_KEY=your_openai_api_key
	DATABASE_API_KEY=your_vector_db_key
	PORT=local_host_port
</pre>

...
🧪 API Endpoints 
 Use this Postman collection URL 
<pre>
	https://api.postman.com/collections/40296739-2dc59f45-851b-4f2f-a2d4-f187339d19ee?access_key=PMAT-01JRWHH5GWT984FDEWQ29K77TS
</pre>








