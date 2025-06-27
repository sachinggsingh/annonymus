"use client";

import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="min-h-screen  dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-violet-700 dark:text-blue-400 mb-6 text-center md:text-left">Send us a Message</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <Button
            variant='outline'
              type="submit"
              className="w-full bg-violet-400 dark:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-violet-500 dark:hover:bg-blue-600 transition duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </Button>
          </div>
        </form>

        {/* Map Section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full h-72 md:h-full bg-gray-200 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14745.96401381652!2d72.571362!3d23.022505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f55b1a6b2d%3A0x5e9b7b7b7b7b7b7b!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1717171717171!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laundry Store Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

