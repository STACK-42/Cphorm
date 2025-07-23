
import React, { useState } from 'react';
import { DynamicFormBuilder } from '../components/DynamicFormBuilder';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
      <DynamicFormBuilder />
    </div>
  );
};

export default Index;
