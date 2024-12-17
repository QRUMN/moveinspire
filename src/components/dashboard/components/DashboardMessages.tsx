import React from 'react';
import { Send } from 'lucide-react';
import { BackButton } from '../../common/BackButton';

const DEMO_MESSAGES = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    message: 'Great job in class today! Keep up the amazing energy!',
    timestamp: '2 hours ago',
    unread: true
  },
  {
    id: 2,
    sender: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    message: 'Your next Stretch & Release class is confirmed for tomorrow at 7 PM',
    timestamp: '1 day ago',
    unread: false
  }
];

export function DashboardMessages() {
  const [newMessage, setNewMessage] = React.useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sending message
    setNewMessage('');
  };

  return (
    <div className="space-y-8">
      <div>
        <BackButton to="/dashboard" label="Back to Dashboard" />
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-200">
          {DEMO_MESSAGES.map((message) => (
            <div key={message.id} className="p-6 hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-start space-x-4">
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {message.sender}
                      {message.unread && (
                        <span className="ml-2 inline-block w-2 h-2 bg-purple-600 rounded-full" />
                      )}
                    </h3>
                    <span className="text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{message.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <form onSubmit={handleSend} className="flex items-center space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}