import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F3F4F6] border-b border-[#e7edf4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-8">
              <img 
                src="/assets/Asset7.svg" 
                alt="Cphorm Logo" 
                className="h-8 w-8 object-contain"
                style={{ filter: 'none', border: 'none', outline: 'none' }}
              />
            </div>
            <span className="font-bold text-2xl text-[#2563EB] font-google-sans tracking-wide">Cphorm.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-midnight hover:text-cool-blue transition-colors duration-200 font-medium"
              >
                Home
              </a>
              
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-midnight hover:text-cool-blue transition-colors duration-200 font-medium"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-soft-gray z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-midnight hover:bg-soft-gray transition-colors duration-200">
                        Data Governance
                      </a>
                      <a href="#" className="block px-4 py-2 text-midnight hover:bg-soft-gray transition-colors duration-200">
                        Healthcare Analytics
                      </a>
                      <a href="#" className="block px-4 py-2 text-midnight hover:bg-soft-gray transition-colors duration-200">
                        Pharmacy Management
                      </a>
                      <a href="#" className="block px-4 py-2 text-midnight hover:bg-soft-gray transition-colors duration-200">
                        Regulatory Compliance
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Button 
                variant="outline" 
                className="border-cool-blue text-cool-blue hover:bg-cool-blue hover:text-white transition-all duration-200"
              >
                Contact us
              </Button>
              <Button 
                className="bg-cool-blue hover:bg-blue-700 text-white transition-all duration-200"
              >
                Explore Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
