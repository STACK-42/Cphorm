
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'tel' | 'date' | 'select' | 'textarea';
  placeholder: string;
  required?: boolean;
  options?: string[];
}

export const availableFields: FormField[] = [
  { id: 'full_name', label: 'Full Name', type: 'text', placeholder: 'Enter full name', required: true },
  { id: 'lat', label: 'Latitude', type: 'number', placeholder: 'Enter latitude' },
  { id: 'long', label: 'Longitude', type: 'number', placeholder: 'Enter longitude' },
  { id: 'date_of_birth', label: 'Date of Birth', type: 'date', placeholder: 'Select date of birth' },
  { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter age' },
  { id: 'sex', label: 'Sex', type: 'select', placeholder: 'Select sex', options: ['Male', 'Female', 'Other'] },
  { id: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Enter occupation' },
  { id: 'marital_status', label: 'Marital Status', type: 'select', placeholder: 'Select marital status', options: ['Single', 'Married', 'Divorced', 'Widowed'] },
  { id: 'address', label: 'Address', type: 'textarea', placeholder: 'Enter complete address' },
  { id: 'contact_information', label: 'Contact Information', type: 'tel', placeholder: 'Enter phone number' },
  { id: 'presenting_complaint', label: 'Presenting Complaint', type: 'textarea', placeholder: 'Describe presenting complaint', required: true },
  { id: 'complaint_duration', label: 'Complaint Duration', type: 'text', placeholder: 'e.g., 3 days, 2 weeks' },
  { id: 'sugar_level', label: 'Blood Sugar Level', type: 'number', placeholder: 'Enter blood sugar level (mg/dL)' },
  { id: 'fever', label: 'Fever Present', type: 'select', placeholder: 'Select fever status', options: ['Yes', 'No'] },
  { id: 'weight', label: 'Weight', type: 'number', placeholder: 'Enter weight (kg)' },
  { id: 'height', label: 'Height', type: 'number', placeholder: 'Enter height (meters)' },
  { id: 'temperature', label: 'Temperature', type: 'number', placeholder: 'Enter temperature (°C)' },
  { id: 'heart_rate', label: 'Heart Rate', type: 'number', placeholder: 'Enter heart rate (bpm)' },
  { id: 'final_diagnosis', label: 'Final Diagnosis', type: 'text', placeholder: 'Enter final diagnosis' },
  { id: 'malaria_type', label: 'Malaria Type', type: 'text', placeholder: 'Enter malaria type (if applicable)' },
  { id: 'visit_date', label: 'Visit Date', type: 'date', placeholder: 'Select visit date' },
];

interface FieldSelectorProps {
  selectedFields: string[];
  onFieldToggle: (fieldId: string) => void;
}

const FieldSelector: React.FC<FieldSelectorProps> = ({ selectedFields, onFieldToggle }) => {
  const fieldCategories = {
    'Personal Information': ['full_name', 'date_of_birth', 'age', 'sex', 'occupation', 'marital_status', 'address', 'contact_information'],
    'Location Data': ['lat', 'long'],
    'Medical History': ['presenting_complaint', 'complaint_duration', 'visit_date'],
    'Vital Signs': ['sugar_level', 'fever', 'weight', 'height', 'temperature', 'heart_rate'],
    'Diagnosis': ['final_diagnosis', 'malaria_type'],
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-midnight">Select Form Fields</CardTitle>
        <p className="text-sm text-muted-foreground">
          Choose which data fields to include in your form
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(fieldCategories).map(([category, fieldIds]) => (
          <div key={category} className="space-y-3">
            <h4 className="font-semibold text-midnight text-sm uppercase tracking-wide">
              {category}
            </h4>
            <div className="space-y-2">
              {fieldIds.map((fieldId) => {
                const field = availableFields.find(f => f.id === fieldId);
                if (!field) return null;
                
                return (
                  <div key={fieldId} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-soft-gray transition-smooth">
                    <Checkbox
                      id={fieldId}
                      checked={selectedFields.includes(fieldId)}
                      onCheckedChange={() => onFieldToggle(fieldId)}
                      className="data-[state=checked]:bg-cool-blue data-[state=checked]:border-cool-blue"
                    />
                    <label
                      htmlFor={fieldId}
                      className="text-sm font-medium text-midnight cursor-pointer flex-1"
                    >
                      {field.label}
                      {field.required && <span className="text-cool-blue ml-1">*</span>}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FieldSelector;
