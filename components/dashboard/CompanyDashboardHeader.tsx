'use client'

import React from 'react'
import { Bell, ChevronDown, Plus } from 'lucide-react'
import { useState, useRef, useEffect } from 'react';

const CompanyDashboardHeader = () => {
    const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
   const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="flex items-center justify-between gap-3 mb-8">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">
                    🏔️
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Company</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Nomad</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      companyDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative"
          >
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Post a job
        </button>
      </div>
  )
}

export default CompanyDashboardHeader