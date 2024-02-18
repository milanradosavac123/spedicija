import { useState, useRef } from 'react';
import { FileButton, Button, Group } from '@mantine/core';

interface DocumentUploadButtonProps {
  files: File[],
  onFilesChanged: (newFiles: File[]) => void,
  onSelectorReset: () => void,
}

export default function DocumentUploadButton({ files, onFilesChanged, onSelectorReset }: DocumentUploadButtonProps) {
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    onSelectorReset();
    resetRef.current?.();
  };

  return (
    <>
      <Group className="min-w-fit">
        <FileButton resetRef={resetRef} onChange={onFilesChanged} accept="application/pdf, application/x-pdf" multiple>
          {(props) => <Button disabled={files.length !== 0} className="bg-[#282147] max-w-fit flex-center" {...props}>Upload document</Button>}
        </FileButton>
        <Button disabled={files.length === 0} className="bg-red-600 disabled:bg-red-500" onClick={clearFile}>
          Reset
        </Button>
      </Group>
    </>
  );
}