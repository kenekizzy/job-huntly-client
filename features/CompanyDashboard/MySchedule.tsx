'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  time: string;
  endTime: string;
  category: 'Interview Schedule' | 'Internal Meeting' | 'Team Schedule' | 'My Task' | 'Reminders';
  date: Date;
}

const MySchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 10, 24)); // November 24, 2021
  const [viewMode, setViewMode] = useState<'Day' | 'Week' | 'Month'>('Week');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Interview Schedule', 'Internal Meeting']);

  const categories = [
    { name: 'Interview Schedule', color: 'bg-indigo-500', checked: true },
    { name: 'Internal Meeting', color: 'bg-green-500', checked: true },
    { name: 'Team Schedule', color: 'bg-gray-400', checked: false },
    { name: 'My Task', color: 'bg-gray-400', checked: false },
    { name: 'Reminders', color: 'bg-gray-400', checked: false },
  ];

  const events: Event[] = [
    {
      id: 1,
      title: 'Interview Session with Kathryn Murphy',
      time: '10:40',
      endTime: '11:00',
      category: 'Interview Schedule',
      date: new Date(2021, 10, 24),
    },
    {
      id: 2,
      title: 'Interview Session',
      time: '08:00',
      endTime: '09:00',
      category: 'Interview Schedule',
      date: new Date(2021, 10, 24),
    },
    {
      id: 3,
      title: 'Meeting with client',
      time: '09:00',
      endTime: '10:30',
      category: 'Internal Meeting',
      date: new Date(2021, 10, 26),
    },
  ];

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDays.push(date);
    }
    return weekDays;
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  const getEventStyle = (event: Event) => {
    const [startHour, startMinute] = event.time.split(':').map(Number);
    const [endHour, endMinute] = event.endTime.split(':').map(Number);
    const startMinutes = startHour * 60 + startMinute;
    const endMinutes = endHour * 60 + endMinute;
    const duration = endMinutes - startMinutes;

    return {
      top: `${(startMinutes / 60) * 4}rem`,
      height: `${(duration / 60) * 4}rem`,
    };
  };

  const toggleCategory = (categoryName: string) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const weekDays = getWeekDays();
  const monthDays = getDaysInMonth(currentDate);

  return (
    <div className="flex gap-6">
      {/* Left Sidebar */}
      <div className="w-80 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Schedule</h1>
            <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Today</span>
          </div>
        </div>

        {/* Create Event Button */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Create Event
        </button>

        {/* Mini Calendar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {monthDays.map((day, index) => (
              <button
                key={index}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                  day === null
                    ? 'invisible'
                    : day === 24
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
            <button className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
              <Plus className="w-4 h-4" />
              Add Category
            </button>
          </div>
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => toggleCategory(category.name)}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div className={`w-3 h-3 rounded ${category.color}`}></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Calendar */}
      <div className="flex-1">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() - 7);
                setCurrentDate(newDate);
              }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {monthNames[currentDate.getMonth()].toUpperCase()} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => {
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() + 7);
                setCurrentDate(newDate);
              }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="flex gap-2">
            {(['Day', 'Week', 'Month'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === mode
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Week View */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Week Days Header */}
          <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
            <div className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">GMT -07</div>
            {weekDays.map((date, index) => (
              <div
                key={index}
                className={`p-4 text-center ${
                  date.getDate() === 24 ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                }`}
              >
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {dayNames[date.getDay()].toUpperCase()}
                </div>
                <div
                  className={`text-2xl font-bold ${
                    date.getDate() === 24
                      ? 'w-12 h-12 mx-auto bg-indigo-600 text-white rounded-full flex items-center justify-center'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {date.getDate()}
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-8 relative">
            {/* Time Column */}
            <div className="border-r border-gray-200 dark:border-gray-700">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="h-16 border-b border-gray-200 dark:border-gray-700 px-2 py-1 text-xs text-gray-500 dark:text-gray-400"
                >
                  {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                </div>
              ))}
            </div>

            {/* Day Columns */}
            {weekDays.map((date, dayIndex) => (
              <div
                key={dayIndex}
                className={`relative border-r border-gray-200 dark:border-gray-700 ${
                  date.getDate() === 24 || date.getDate() === 27 ? 'bg-red-50 dark:bg-red-900/10' : ''
                }`}
              >
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="h-16 border-b border-gray-200 dark:border-gray-700"
                  ></div>
                ))}

                {/* Events */}
                {events
                  .filter((event) => {
                    const eventDate = event.date;
                    return (
                      eventDate.getDate() === date.getDate() &&
                      eventDate.getMonth() === date.getMonth() &&
                      selectedCategories.includes(event.category)
                    );
                  })
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`absolute left-1 right-1 rounded-lg p-2 text-white text-xs ${
                        event.category === 'Interview Schedule'
                          ? 'bg-blue-500'
                          : 'bg-green-500'
                      }`}
                      style={getEventStyle(event)}
                    >
                      <div className="font-semibold mb-1">{event.title}</div>
                      <div className="text-xs opacity-90">
                        {event.time} - {event.endTime}
                      </div>
                      {event.category === 'Interview Schedule' && event.id === 1 && (
                        <div className="mt-1 text-2xl">👥</div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
