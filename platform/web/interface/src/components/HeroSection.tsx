
import React from 'react';
import { Activity } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-midnight font-poppins mb-6 leading-tight">
          Simple, Insightful, Trustworthy
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Certified Provider By The Sudanese Authority for DATA Governance & insight
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-cool-blue hover:bg-cool-blue/90 text-white rounded-full px-8 py-4 text-lg font-semibold"
          >
            Free Registration
          </Button>
          <Button 
            size="lg" 
            className="bg-cool-blue hover:bg-cool-blue/90 text-white rounded-full px-8 py-4 text-lg font-semibold"
          >
            Communication
          </Button>
        </div>
        
        {/* Placeholder Box */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-4 border-midnight rounded-3xl p-8 shadow-lg">
            <div className="aspect-video bg-soft-gray rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-cool-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-cool-blue" />
                </div>
                <h3 className="text-xl font-semibold text-midnight mb-2">
                  Smart Health Data Collection
                </h3>
                <p className="text-gray-600">
                  Placeholder for demo video or interactive preview
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-cool-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-cool-blue" />
            </div>
            <h3 className="text-lg font-semibold text-midnight mb-2">Smart Forms</h3>
            <p className="text-gray-600">Dynamic form generation for efficient data collection</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-cool-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-cool-blue" />
            </div>
            <h3 className="text-lg font-semibold text-midnight mb-2">Reliable Data</h3>
            <p className="text-gray-600">Secure and accurate health data management</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-cool-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-cool-blue" />
            </div>
            <h3 className="text-lg font-semibold text-midnight mb-2">Public Service</h3>
            <p className="text-gray-600">Focused on equity, alerts, and community insight</p>
          </div>
        </div>
      </div>
    </div>
  );
};
