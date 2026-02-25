'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Subscribe email:', email);
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_5739)">
                <circle cx="16" cy="16" r="16" fill="#4640DE" />
                <mask id="path-2-inside-1_1_5739" fill="white">
                  <path d="M16 27C18.6652 27 21.3304 24.8953 23.0607 23.179C23.4599 22.7831 22.9792 22.2122 22.4822 22.4749C20.6013 23.469 18.0181 24.6 16 24.6C13.9819 24.6 11.3987 23.469 9.5178 22.4749C9.02076 22.2122 8.54012 22.7831 8.93926 23.179C10.6696 24.8953 13.3348 27 16 27Z" />
                </mask>
                <path d="M23.0607 23.179L25.1734 25.3089V25.3089L23.0607 23.179ZM8.93926 23.179L6.82658 25.3089H6.82658L8.93926 23.179ZM9.5178 22.4749L10.9197 19.8226L10.9197 19.8226L9.5178 22.4749ZM22.4822 22.4749L21.0803 19.8226L21.0803 19.8226L22.4822 22.4749ZM20.948 21.0491C20.1783 21.8126 19.2652 22.5953 18.3201 23.1712C17.3491 23.7627 16.5672 24 16 24V30C18.098 30 19.9813 29.1849 21.4419 28.2951C22.9282 27.3895 24.2129 26.2616 25.1734 25.3089L20.948 21.0491ZM16 24C15.4328 24 14.6509 23.7627 13.6799 23.1712C12.7348 22.5953 11.8217 21.8126 11.052 21.0491L6.82658 25.3089C7.78708 26.2616 9.07177 27.3895 10.5581 28.2951C12.0187 29.1849 13.902 30 16 30V24ZM8.11593 25.1272C9.1314 25.6639 10.3827 26.2629 11.6934 26.7336C12.967 27.1911 14.4921 27.6 16 27.6V21.6C15.4899 21.6 14.7143 21.4434 13.7216 21.0868C12.7658 20.7436 11.7851 20.28 10.9197 19.8226L8.11593 25.1272ZM16 27.6C17.5079 27.6 19.033 27.1911 20.3066 26.7336C21.6173 26.2629 22.8686 25.6639 23.8841 25.1272L21.0803 19.8226C20.2149 20.28 19.2342 20.7436 18.2785 21.0868C17.2857 21.4434 16.5101 21.6 16 21.6V27.6ZM25.1734 25.3089C25.7674 24.7197 26.1776 23.8995 26.2071 22.9593C26.2356 22.0551 25.905 21.2526 25.4152 20.663C24.4114 19.4547 22.6321 19.0024 21.0803 19.8226L23.8841 25.1272C22.8293 25.6847 21.5389 25.3865 20.7999 24.4969C20.4425 24.0667 20.1883 23.4648 20.2101 22.7708C20.2331 22.0407 20.5536 21.4403 20.948 21.0491L25.1734 25.3089ZM11.052 21.0491C11.4464 21.4403 11.7669 22.0407 11.7899 22.7708C11.8117 23.4648 11.5575 24.0667 11.2001 24.4969C10.4611 25.3865 9.17068 25.6847 8.11593 25.1272L10.9197 19.8226C9.36787 19.0024 7.5886 19.4547 6.58483 20.663C6.09504 21.2526 5.76443 22.0551 5.79286 22.9593C5.82241 23.8995 6.23259 24.7197 6.82658 25.3089L11.052 21.0491Z" fill="white" mask="url(#path-2-inside-1_1_5739)" />
                <path d="M21.7117 9.31575C21.3918 8.99365 21.3918 8.47732 21.7117 8.15521L23.4302 6.02632L23.4302 5.98937C23.8655 5.55866 24.5713 5.55866 25.0067 5.98937C25.442 6.42007 25.442 7.11837 25.0067 7.54907L22.9819 9.31575L22.9063 9.38279C22.7482 9.50768 22.5511 9.57665 22.3468 9.57665C22.1085 9.57665 21.88 9.48277 21.7117 9.31575ZM8.6665 15.185C8.6665 13.2892 9.4277 11.4711 10.7826 10.1306C12.1376 8.79004 13.9753 8.03694 15.8914 8.03694C19.8817 8.03694 23.1164 11.2372 23.1164 15.185C23.1164 19.1327 19.8817 22.333 15.8914 22.333C11.9012 22.333 8.6665 19.1327 8.6665 15.185Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_5739">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">JobHuntly</span>
            </Link>
            <p className="text-gray-900 dark:text-gray-400 max-w-sm">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/companies" className="text-gray-900 dark:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-900 dark:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-900 dark:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/advice" className="text-gray-900 dark:text-white transition-colors">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-900 dark:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-900 dark:text-white transition-colors">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-900 dark:text-white transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-900 dark:text-white transition-colors">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 dark:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Get job notifications</h3>
            <p className="text-gray-900 dark:text-gray-400 text-sm mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-900 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            2021 © JobHuntly. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center dark:hover:bg-gray-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
