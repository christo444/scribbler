# Scribbler 📝

Scribbler is a sleek, responsive, full-stack Note-Taking application built using the MERN stack (MongoDB, Express, React, Node.js). It features a modern, dynamic user interface with light/dark mode support and a robust backend designed for speed and reliability.

## 🌟 Features
* **Create, Read, Update, Delete (CRUD):** Fully functional note management system.
* **Modern UI/UX:** Built with React, TailwindCSS, and DaisyUI for a beautiful, responsive, and glassmorphic design.
* **Rate Limiting:** Protects the backend from spam/abuse using Upstash Redis sliding window algorithms (configured to allow 50 requests/10s per user IP).
* **Toast Notifications:** Real-time feedback for all user actions (saving, editing, deleting) using `react-hot-toast`.
* **State Management:** Uses React Hooks (`useState`, `useEffect`) and React Router for seamless single-page navigation without reloading.

## 🛠️ Tech Stack

**Frontend:**
* React (Vite)
* TailwindCSS & DaisyUI (Styling)
* Lucide React (Icons)
* Axios (HTTP Client)
* React Router (Routing)

**Backend:**
* Node.js & Express.js
* MongoDB (Mongoose)
* Upstash Redis (Rate Limiting)
* CORS & Dotenv

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and MongoDB installed or have a MongoDB Atlas cluster available. You also need an Upstash Redis database for the rate limiter.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/scribbler.git
   cd scribbler
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add your credentials:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   ```
   Run the backend server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   Open a new terminal and run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the app in action!

## 📸 Application Structure
The repository is split into two independent folders to keep the logic completely separated:
* `/frontend`: Contains the Vite + React single-page application.
* `/backend`: Contains the Node.js Express server and MongoDB models.
