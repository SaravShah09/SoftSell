import { useState } from 'react';

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const exampleQuestions = [
    'How do I sell my license?',
    'What is SoftSell?',
    'Can I upgrade later?',
    'Do you offer refunds?',
    'Is my data safe?'
  ];

  const handleSendMessage = async (message = userMessage) => {
    if (!message.trim()) return;

    const newMessages = [...messages, { text: message, sender: 'user' }];
    setMessages(newMessages);
    setUserMessage('');
    setIsLoading(true);

    try {
const response = await fetch('https://sotsell-1.onrender.com/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message }),
});

      const data = await response.json();
      const botMessage = data.botMessage || 'Hmm, I didn’t get that.';

      setMessages((prev) => [...prev, { text: botMessage, sender: 'bot' }]);
    } catch (err) {
      console.error('API error:', err);
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (question) => {
    setUserMessage('');
    handleSendMessage(question);
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-xl z-50 border border-gray-300 dark:border-gray-700 flex flex-col h-[500px] overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-t-xl font-semibold">
        💬 Customer Chat
      </div>

      {/* Example Question Buttons */}
      <div className="px-4 pt-3 pb-2 space-y-2">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Quick Questions:</p>
        <div className="flex flex-wrap gap-2">
          {exampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleExampleClick(q)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs hover:bg-blue-500 hover:text-white transition"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Message Display */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white dark:bg-gray-900">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="text-left text-sm">
            <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
              Typing...
            </span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex border-t border-gray-200 dark:border-gray-700">
        <input
          type="text"
          className="flex-1 p-2 text-sm outline-none dark:bg-gray-800"
          placeholder="Ask a question..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={() => handleSendMessage()}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWidget;
