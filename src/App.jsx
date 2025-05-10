import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded z-50"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* Sections */}
      <HeroSection theme={darkMode ? 'dark' : 'light'} />
      <HowItWorks theme={darkMode ? 'dark' : 'light'} />
      <WhyChooseUs theme={darkMode ? 'dark' : 'light'} />
      <Testimonials theme={darkMode ? 'dark' : 'light'} />
      <ContactForm theme={darkMode ? 'dark' : 'light'} />
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isChatOpen ? 'Close Chat' : '💬 Chat'}
      </button>

      {/* Chat Widget */}
      {isChatOpen && <ChatWidget />}
    </div>
  );
}

export default App;
