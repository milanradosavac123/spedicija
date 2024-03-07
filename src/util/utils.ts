export function isLinkPresent(text: string): boolean {
    // Regular expression to match well-formed HTTP/HTTPS URLs
    const urlRegex = /\b(?:https?|http|ftp):\/\/\S+/i;

    // Test if the string contains a link
    return urlRegex.test(text);
}

export function extractLink(text: string): string | null {
    // Regular expression to match well-formed HTTP/HTTPS URLs
    const urlRegex = /\b(?:https?|http|ftp):\/\/\S+/i;
  
    // Find the first match in the string
    const match = text.match(urlRegex);
  
    // Return the matched link or null if not found
    return match ? match[0] : null;
  }
