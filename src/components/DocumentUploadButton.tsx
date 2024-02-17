import { useState, useRef } from 'react';
import { FileButton, Button, Group } from '@mantine/core';



export default function DocumentUploadButton() {
  const [files, setFiles] = useState<File[]>([]);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFiles([]);
    resetRef.current?.();
  };

  return (
    <>
      <Group className="min-w-fit">
        <FileButton resetRef={resetRef} onChange={(files) => {
            setFiles((oldFiles) => [...oldFiles, ...files]);
        }} accept="application/pdf, application/x-pdf" multiple>
          {(props) => <Button disabled={files.length !== 0} className="bg-[#282147] max-w-fit flex-center" {...props}>Upload document</Button>}
        </FileButton>
        <Button disabled={files.length === 0} className="bg-red-600 disabled:bg-red-500" onClick={clearFile}>
          Reset
        </Button>
      </Group>
    </>
  );
}