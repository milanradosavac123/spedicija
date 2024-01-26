import React from 'react';
import { Input, TextInput } from '@mantine/core';

interface OutlinedTextFieldProps {
  className?: string;
  label: string;
  value: string;
  leftSection?: React.ReactNode;
  rightSectionWidth?: number;
  rightSection?: React.ReactNode;
  onChange: (value: string) => void;
}

export default function OutlinedTextField({ className, label, value, leftSection, rightSectionWidth, rightSection, onChange }: OutlinedTextFieldProps) {
  return (
      <TextInput
        className={`mb-4 border-solid border-2 border-[#282147] rounded-[10px] flex-auto ${className}`}
        placeholder={label}
        id="outlined-text-field"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        variant="outline"
        leftSection={leftSection}
        rightSectionWidth={rightSectionWidth}
        rightSection={rightSection}
      />
  );
};
