# 📚 DocuMind AI - Backend

An AI-powered backend for **DocuMind AI** that enables users to upload PDF documents and ask natural language questions about their content. The application extracts text, creates semantic embeddings, stores them in a vector database, and generates context-aware answers using the **NVIDIA Inference API**.

---

## 🚀 Live Demo

- **Backend API:** https://your-huggingface-space.hf.space
- **Frontend:** https://your-vercel-app.vercel.app

---

## ✨ Features

- 📄 Upload PDF documents
- 🔍 Extract text from PDFs
- ✂️ Split documents into semantic chunks
- 🧠 Generate vector embeddings
- 🗂️ Store embeddings using ChromaDB
- 💬 Ask questions in natural language
- 🤖 AI-generated answers using NVIDIA Inference API
- ⚡ FastAPI REST API
- 🐳 Dockerized for easy deployment

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| FastAPI | Backend framework |
| NVIDIA Inference API | Large Language Model inference |
| Sentence Transformers | Text embeddings |
| ChromaDB | Vector database |
| PyMuPDF | PDF text extraction |
| NLTK | Text preprocessing |
| Uvicorn | ASGI server |
| Docker | Containerization |
| Hugging Face Spaces | Backend deployment |

---

## 📁 Project Structure

```text
.
├── chroma_db/           # Vector database storage
├── services/            # Business logic
├── uploads/             # Uploaded PDF files
├── main.py              # FastAPI application
├── models.py            # Request & response models
├── Dockerfile           # Docker configuration
├── Procfile             # Deployment configuration
├── runtime.txt          # Python runtime version
├── requirements.txt     # Project dependencies
├── download_nltk.py     # Downloads NLTK resources
├── check_env.py         # Environment checker
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/documind-ai-backend.git

cd documind-ai-backend
```

### Create a virtual environment

```bash
python -m venv venv
```

### Activate it

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Download NLTK resources

```bash
python download_nltk.py
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
NVIDIA_API_KEY=your_nvidia_api_key
```

---

## ▶️ Run Locally

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The API will be available at:

```
http://127.0.0.1:8000
```

Interactive API documentation:

```
http://127.0.0.1:8000/docs
```

---

## 🐳 Docker

Build the Docker image:

```bash
docker build -t documind-backend .
```

Run the container:

```bash
docker run -p 8000:8000 --env-file .env documind-backend
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload` | Upload and process a PDF document |
| POST | `/ask` | Ask questions about the uploaded document |

---

## 🌐 Deployment

The backend is deployed on **Hugging Face Spaces** using Docker.

The frontend is deployed separately on **Vercel** and communicates with this backend through REST APIs.

---

## 🔄 Workflow

```text
Upload PDF
      │
      ▼
Extract Text (PyMuPDF)
      │
      ▼
Text Chunking
      │
      ▼
Generate Embeddings
      │
      ▼
Store in ChromaDB
      │
      ▼
User Question
      │
      ▼
Retrieve Relevant Chunks
      │
      ▼
NVIDIA Inference API
      │
      ▼
Generated Answer
```

---

## 📌 Future Improvements

- Multi-document support
- User authentication
- Conversation history
- Streaming responses
- OCR support for scanned PDFs
- Source citations for answers

---

## 🤝 Related Repository

Frontend Repository:
https://github.com/YOUR_USERNAME/documind-ai-frontend

---

## 📄 License

This project is licensed under the MIT License.
