
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-midnight text-white mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Cphorm</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Smart, reliable health data collection platform focused on equity, alerts, and community insight. 
              Certified by The Sudanese Authority for DATA Governance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Data Entry Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Analytics Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Reporting Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Data Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Cphorm Data Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cool-blue transition-colors">
                  Payment Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Khartoum, Sudan</li>
              <li>support@cphorm.com</li>
              <li>+249 123 456 789</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-300 text-sm">A project by</span>
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/stack_42.svg" 
                  alt="Stack 42" 
                  className="h-6 w-6"
                  onError={(e) => {
                    // Fallback if SVG doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-cool-blue font-semibold text-sm">Stack-42</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              © 2024 Cphorm. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
