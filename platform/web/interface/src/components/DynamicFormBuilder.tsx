
import React, { useState } from 'react';
import Header from './Header';
import FieldSelector from './FieldSelector';
import FormPreview from './FormPreview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RotateCcw, Settings } from 'lucide-react';

export const DynamicFormBuilder: React.FC = () => {
  const [selectedFields, setSelectedFields] = useState<string[]>(['full_name', 'presenting_complaint']);

  const handleFieldToggle = (fieldId: string) => {
    setSelectedFields(prev => {
      if (prev.includes(fieldId)) {
        return prev.filter(id => id !== fieldId);
      } else {
        return [...prev, fieldId];
      }
    });
  };

  const handleReset = () => {
    setSelectedFields([]);
  };

  const handleQuickSetup = (preset: string) => {
    switch (preset) {
      case 'basic':
        setSelectedFields(['full_name', 'age', 'sex', 'presenting_complaint']);
        break;
      case 'detailed':
        setSelectedFields([
          'full_name', 'date_of_birth', 'age', 'sex', 'occupation', 
          'contact_information', 'presenting_complaint', 'complaint_duration',
          'temperature', 'heart_rate', 'final_diagnosis'
        ]);
        break;
      case 'vitals':
        setSelectedFields([
          'full_name', 'age', 'temperature', 'heart_rate', 'weight', 
          'height', 'sugar_level', 'fever'
        ]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-midnight mb-2">
            Dynamic Form Configuration
          </h1>
          <p className="text-muted-foreground text-lg">
            Create customized health data collection forms for your needs
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-midnight">Selected Fields:</span>
              <Badge variant="secondary" className="bg-cool-blue/10 text-cool-blue">
                {selectedFields.length} fields
              </Badge>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickSetup('basic')}
                className="text-xs"
              >
                Basic Setup
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickSetup('detailed')}
                className="text-xs"
              >
                Detailed Setup
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickSetup('vitals')}
                className="text-xs"
              >
                Vitals Only
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FieldSelector
              selectedFields={selectedFields}
              onFieldToggle={handleFieldToggle}
            />
          </div>
          
          <div className="space-y-6">
            <FormPreview selectedFields={selectedFields} />
          </div>
        </div>
      </main>
    </div>
  );
};
