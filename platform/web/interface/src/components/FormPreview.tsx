
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { availableFields, FormField } from './FieldSelector';
import { Send, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormPreviewProps {
  selectedFields: string[];
}

const FormPreview: React.FC<FormPreviewProps> = ({ selectedFields }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const selectedFieldObjects = selectedFields
    .map(fieldId => availableFields.find(f => f.id === fieldId))
    .filter((field): field is FormField => field !== undefined);

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = selectedFieldObjects.filter(field => field.required);
    const missingFields = requiredFields.filter(field => !formData[field.id]?.trim());
    
    if (missingFields.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill in all required fields: ${missingFields.map(f => f.label).join(', ')}`,
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted with data:', formData);
    toast({
      title: "Form Submitted Successfully",
      description: `Collected data for ${Object.keys(formData).length} fields`,
    });
    
    // Reset form
    setFormData({});
  };

  const renderFormField = (field: FormField) => {
    const commonProps = {
      id: field.id,
      placeholder: field.placeholder,
      value: formData[field.id] || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        handleInputChange(field.id, e.target.value),
      className: "transition-smooth focus:ring-2 focus:ring-cool-blue focus:border-cool-blue",
    };

    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            {...commonProps}
            rows={3}
            className="resize-none transition-smooth focus:ring-2 focus:ring-cool-blue focus:border-cool-blue"
          />
        );
      
      case 'select':
        return (
          <Select
            value={formData[field.id] || ''}
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            <SelectTrigger className="transition-smooth focus:ring-2 focus:ring-cool-blue focus:border-cool-blue">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      default:
        return <Input {...commonProps} type={field.type} />;
    }
  };

  if (selectedFields.length === 0) {
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-midnight flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Form Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-soft-gray rounded-full flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 text-midnight/40" />
            </div>
            <h3 className="text-lg font-semibold text-midnight mb-2">No Fields Selected</h3>
            <p className="text-muted-foreground">
              Select fields from the left panel to preview your form
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-midnight flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Form Preview
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Preview and test your dynamic form
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {selectedFieldObjects.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="text-midnight font-medium">
                {field.label}
                {field.required && <span className="text-cool-blue ml-1">*</span>}
              </Label>
              {renderFormField(field)}
            </div>
          ))}
          
          <div className="pt-4 border-t border-border">
            <Button 
              type="submit" 
              className="w-full bg-cool-blue hover:bg-cool-blue/90 transition-smooth"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Form
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormPreview;
