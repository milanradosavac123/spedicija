import React from 'react';
import { Input } from '@mantine/core';

interface OutlinedTextFieldProps {
  className?: string;
  label: string;
  value: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  onChange: (value: string) => void;
}

export default function OutlinedTextField({ className, label, value, leftSection, rightSection, onChange }: OutlinedTextFieldProps) {
  return (
      <Input
        className={`mb-4 border-solid border-2 border-[#282147] rounded-[10px] flex-auto ${className}`}
        placeholder={label}
        id="outlined-text-field"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        variant="outline"
        leftSection={leftSection}
        rightSection={rightSection}
      />
  );
};
