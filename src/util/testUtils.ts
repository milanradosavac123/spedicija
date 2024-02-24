import * as pdfjs from 'pdfjs-dist';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

export async function renderFirstPageAsImage(pdfUrl: string): Promise<string | null> {
  // Load the PDF document
  const loadingTask = pdfjs.getDocument(pdfUrl);

  try {
    const pdf: PDFDocumentProxy = await loadingTask.promise;

    // Load the first page
    const pageNumber = 1;
    const page = await pdf.getPage(pageNumber);

    // Set the scale for rendering
    const scale = 1.5;

    // Set up the canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Canvas rendering context is not available.');
    }

    // Get the dimensions of the page
    const viewport = page.getViewport({ scale });

    // Set the canvas dimensions based on the page dimensions
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render the page onto the canvas
    await page.render({ canvasContext: context, viewport }).promise;

    // Convert the canvas content to a data URL
    const dataUrl = canvas.toDataURL('image/png');

    return dataUrl;
  } catch (error) {
    console.error('Error loading or rendering PDF:', error);
    return null;
  }
}