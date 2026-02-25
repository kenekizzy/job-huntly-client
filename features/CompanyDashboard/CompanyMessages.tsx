'use client';

import { useState } from 'react';
import { Search, Pin, Star, MoreVertical, Smile, Paperclip, Send, ChevronDown } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  role: string;
  avatar: string;
  preview: string;
  time: string;
  unread?: boolean;
  isActive?: boolean;
}

interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  time: string;
  isOwn: boolean;
}

const CompanyMessages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState('');

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Jan Mayer',
      role: 'Designer Candidate',
      avatar: '👨‍💼',
      preview: 'We want to invite you for a qui...',
      time: '12 mins ago',
      unread: true,
      isActive: true,
    },
    {
      id: 2,
      sender: 'Joe Bartmann',
      role: 'Designer Candidate',
      avatar: '👨',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 3,
      sender: 'Ally Wales',
      role: 'Designer Candidate',
      avatar: '👩',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 4,
      sender: 'James Gardner',
      role: 'Designer Candidate',
      avatar: '👨‍🦱',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 5,
      sender: 'Allison Geidt',
      role: 'Designer Candidate',
      avatar: '👩‍🦰',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 6,
      sender: 'Ruben Culhane',
      role: 'Designer Candidate',
      avatar: '👨‍🦲',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 7,
      sender: 'Lydia Diaz',
      role: 'Designer Candidate',
      avatar: '👩‍🦱',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 8,
      sender: 'James Dokidis',
      role: 'Designer Candidate',
      avatar: '👨‍💻',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
    {
      id: 9,
      sender: 'Angelina Swann',
      role: 'Designer Candidate',
      avatar: '👩‍💼',
      preview: 'Hey thanks for your interview...',
      time: '3:40 PM',
    },
  ];

  const chatMessages: ChatMessage[] = [
    {
      id: 1,
      sender: 'You',
      content: 'Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work.',
      time: '',
      isOwn: true,
    },
    {
      id: 2,
      sender: 'You',
      content: 'We want to invite you for a quick interview',
      time: '12 mins ago',
      isOwn: true,
    },
    {
      id: 3,
      sender: 'Jan Mayer',
      content: 'Hi Maria, sure I would love to. Thanks for taking the time to see my work!',
      time: '12 mins ago',
      isOwn: false,
    },
  ];

  const activeMessage = messages.find(m => m.isActive) || messages[0];

  return (
    <div className="h-[calc(100vh-12rem)]">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Messages</h1>

      <div className="flex gap-6 h-full">
        {/* Messages List */}
        <div className="w-[400px] bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message)}
                className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors ${
                  message.isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/20'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-2xl shrink-0">
                    {message.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {message.sender}
                        </h3>
                        {message.unread && (
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {message.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                {activeMessage.avatar}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  {activeMessage.sender}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activeMessage.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Pin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Star className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors">
                View Profile
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-5xl mb-4">
              {activeMessage.avatar}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {activeMessage.sender}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{activeMessage.role}</p>
            <button className="mb-4">
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            <div className="w-full max-w-md">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Today</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${msg.isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
                  {!msg.isOwn && (
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm">
                        {activeMessage.avatar}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {msg.sender}
                      </span>
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      msg.isOwn
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.time && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {msg.time}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-end gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Reply message"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                    <Paperclip className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                    <Smile className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <button className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMessages;
