import React from 'react';
import { Group, Input, Text, TextInput } from '@mantine/core';

interface OutlinedTextFieldProps {
  className?: string;
  label: string;
  placeholder: string;
  value: string;
  leftSection?: React.ReactNode;
  rightSectionWidth?: number;
  rightSection?: React.ReactNode;
  onChange: (value: string) => void;
}

export default function OutlinedTextField({ className, label, placeholder, value, leftSection, rightSectionWidth, rightSection, onChange }: OutlinedTextFieldProps) {
  return (
    <div className="flex flex-col flex-auto" >
      <Text
        className="text-[#282147]"
        component="label" 
        htmlFor="outlined-text-field"
        size="sm"
        fw={500}
      >
        {label}
      </Text>
      <TextInput
        className={`mb-4 border-solid border-2 border-[#282147] rounded-[10px]`}
        placeholder={placeholder}
        id="outlined-text-field"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        variant="outline"
        leftSection={leftSection}
        rightSectionWidth={rightSectionWidth}
        rightSection={rightSection}
      />
    </div>
  );
};
