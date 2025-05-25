# Fast Chat

Fast Chat is a real-time WebSocket-based chat application built with **FastAPI** (backend) and **React** (frontend). The backend is deployed on **Render**, and the frontend is hosted on **Vercel**.

## 🚀 Live Demo

-  [fast-chat-navy.vercel.app](https://fast-chat-navy.vercel.app/)
- **Frontend:** [Fast Chat Frontend](https://fast-chat-navy.vercel.app/)
- **Backend:** [Fast Chat API](https://fastchat-q0dc.onrender.com)

## 🛠 Tech Stack

### **Frontend (React)**
- React.js
- WebSockets
- CSS
- Vercel for deployment

### **Backend (FastAPI)**
- FastAPI
- WebSockets
- Docker
- Render for deployment

## 🏗️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/fast-chat.git
cd fast-chat
```

### **2️⃣ Setup & Run Backend**
```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### **3️⃣ Setup & Run Frontend**
```sh
cd ../frontend
npm install
npm run dev
```

## ⚙️ Deployment

### **Backend (Render)**
- The backend is deployed on Render.
- Dockerized using a `Dockerfile`.

### **Frontend (Vercel)**
- Deployed using Vercel with automatic GitHub integration.
```

## ✨ Features
✅ Real-time WebSocket chat
✅ Automatic environment detection (local vs. production)
✅ FastAPI backend with CORS enabled
✅ Fully responsive UI
✅ Deployed on Vercel & Render

## 📜 License
This project is **open-source**. Feel free to contribute!

🚀 **Happy Chatting!**

