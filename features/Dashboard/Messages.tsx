'use client';

import { useState } from 'react';
import { Search, Send, Paperclip, Smile, MoreVertical, Edit, Star } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Jan Mayer',
      role: 'Recruiter at Nomad',
      avatar: '👨',
      lastMessage: 'We want to invite you for a qui...',
      time: '12 mins ago',
      unread: true,
    },
    {
      id: 2,
      name: 'Joe Bartmann',
      role: 'HR Manager',
      avatar: '👨‍💼',
      lastMessage: 'Hey thanks for your interview...',
      time: '3:40 PM',
      unread: false,
    },
    {
      id: 3,
      name: 'Ally Wales',
      role: 'Recruiter',
      avatar: '👩',
      lastMessage: 'Hey thanks for your interview...',
      time: '3:40 PM',
      unread: false,
    },
  ];

  const messages = [
    {
      sender: 'Jan Mayer',
      text: 'Hey Jake, I wanted to reach out because we saw your work contributions and were impressed by your work.',
      time: '12 mins ago',
      isOwn: false,
    },
    {
      sender: 'Jan Mayer',
      text: 'We want to invite you for a quick interview',
      time: '12 mins ago',
      isOwn: false,
    },
    {
      sender: 'You',
      text: 'Hi Jan, sure I would love to. Thanks for taking the time to see my work!',
      time: '12 mins ago',
      isOwn: true,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Conversations List */}
      <div className="w-96 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="p-6">

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Conversations */}
          <div className="space-y-2">
            {conversations.map((conv, idx) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(idx)}
                className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${
                  selectedChat === idx
                    ? 'bg-indigo-50 dark:bg-indigo-900/20'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-2xl shrink-0">
                  {conv.avatar}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {conv.name}
                      {conv.unread && <span className="ml-2 text-indigo-600">●</span>}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">
                      {conv.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {conv.lastMessage}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
        {/* Chat Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                👨
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white">Jan Mayer</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recruiter at Nomad</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Star className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-3">
                👨
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Jan Mayer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recruiter at Nomad</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                This is the very beginning of your direct message with Jan Mayer
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                Today
              </span>
            </div>

            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  {!msg.isOwn && (
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">
                      👨
                    </div>
                  )}
                  <div
                    className={`max-w-md ${
                      msg.isOwn
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                    } rounded-lg p-4`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-2 ${
                        msg.isOwn ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                  {msg.isOwn && (
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm ml-2 shrink-0">
                      You
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Reply message"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Smile className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
