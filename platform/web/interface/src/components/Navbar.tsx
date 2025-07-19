
import React, { useState } from 'react';
import { Activity, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-cool-blue to-soft-gray rounded-lg p-2">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-midnight font-poppins">Cphorm.</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-midnight hover:text-cool-blue transition-colors font-medium">
            Home
          </a>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-midnight hover:text-cool-blue transition-colors font-medium"
            >
              <span>Solutions</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                <a href="/data-entry" className="block px-4 py-3 text-midnight hover:bg-soft-gray transition-colors">
                  Data Entry Forms
                </a>
                <a href="#" className="block px-4 py-3 text-midnight hover:bg-soft-gray transition-colors">
                  Analytics Dashboard
                </a>
                <a href="#" className="block px-4 py-3 text-midnight hover:bg-soft-gray transition-colors">
                  Reporting Tools
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-cool-blue text-cool-blue hover:bg-cool-blue hover:text-white">
            Contact us
          </Button>
          <Button className="bg-cool-blue hover:bg-cool-blue/90 text-white">
            Explore Data
          </Button>
        </div>
      </div>
    </nav>
  );
};
