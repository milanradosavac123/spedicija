import { FileButton, Button } from '@mantine/core';

interface DocumentUploadButtonProps {
  files: File[],
  onFilesChanged: (newFiles: File[]) => void,
}

export default function DocumentUploadButton({ files, onFilesChanged }: DocumentUploadButtonProps) {
  return (
    <FileButton onChange={onFilesChanged} accept="application/pdf, application/x-pdf" multiple>
      {(props) => <Button className="bg-standard-purple hover:bg-standard-purple-dark max-w-fit flex-center" {...props}>Upload document</Button>}
    </FileButton>
  );
}