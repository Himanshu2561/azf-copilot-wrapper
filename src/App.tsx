import { useState } from 'react'
import './App.css'

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen)
  }

  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="main-heading">Azpire Zone Foundation</h1>
        <p className="random-text">
          Empowering communities through innovation, education, and sustainable development. 
          We believe in creating opportunities that transform lives and build a better future 
          for generations to come. Join us in our mission to make a meaningful impact.
        </p>
      </div>

      {/* Floating Chatbot Button */}
      <button 
        className="chatbot-button"
        onClick={toggleChatbot}
        aria-label="Open chatbot"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chatbot Widget with Iframe */}
      {isChatbotOpen && (
        <div className="chatbot-widget">
          <button 
            className="chatbot-close-button"
            onClick={toggleChatbot}
            aria-label="Close chatbot"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <iframe
            src={import.meta.env.VITE_IFRAME_URL || 'http://10.0.0.77:3000'}
            title="Chatbot"
            className="chatbot-iframe"
            allow="microphone; camera"
          />
        </div>
      )}
    </div>
  )
}

export default App
