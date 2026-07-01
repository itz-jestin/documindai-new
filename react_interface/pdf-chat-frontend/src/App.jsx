import { useState } from "react";
import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import "./App.css";


function App() {
  const [pdfInfo, setPdfInfo] = useState(null);
  return (
    <div className="app">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet"></link>
      
      <header className="navbar">
        <div className="logo">
          📄 DocuMind AI
        </div>

      </header>

      <div className="main-layout">

        <aside className="sidebar">
          <h2>Documents</h2>

          <FileUpload setPdfInfo={setPdfInfo}/>

          <div className="document-card">
            <h3>Current PDF</h3>
            {pdfInfo ? (
                <>
                  <p><strong>📄 {pdfInfo.filename}</strong></p>
                  <p>📑 {pdfInfo.pages} page(s)</p>
                  <p>🔤 {pdfInfo.characters} characters</p>
                </>
              ) : (
                <p>Upload a PDF to start chatting</p>
              )}
          </div>
        </aside>

        <main className="chat-section">
          <ChatBox />
        </main>
      </div>
      <footer className="footer">
        <div className="developer">
          Crafted by Jestin Monachan
        </div>
      </footer>
    </div>
  );
}

export default App;