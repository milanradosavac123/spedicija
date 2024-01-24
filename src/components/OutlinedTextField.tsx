import React from 'react';
import { Input } from '@mantine/core';

interface OutlinedTextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function OutlinedTextField({ label, value, onChange }: OutlinedTextFieldProps) {
  return (
      <Input
        className="mb-4 border-solid border-4 border-black rounded-[10px]"
        placeholder={label}
        id="outlined-text-field"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        variant="outline"
        radius="md"
      />
  );
};
