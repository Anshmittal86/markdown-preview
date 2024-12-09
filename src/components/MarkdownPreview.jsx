// Import the React library to build the component
import React from "react";

// Import DOMPurify to sanitize HTML content and prevent XSS attacks
import DOMPurify from "dompurify";

// Import the marked library to convert Markdown into HTML
import { marked } from "marked";

// Define the MarkdownPreview component, which takes a "markdown" prop
const MarkdownPreview = ({ markdown }) => {
  // Convert the Markdown content to HTML using the "marked" library
  const html = marked(markdown);

  // Sanitize the HTML to ensure it doesn't contain any harmful scripts or elements
  const safeHtml = DOMPurify.sanitize(html);

  // Return a div that displays the sanitized HTML content
  // Use "dangerouslySetInnerHTML" to insert the HTML safely into the DOM
  return (
    <div
      className="prose max-w-full p-4 border rounded-md bg-gray-100" // Apply Tailwind CSS classes for styling
      dangerouslySetInnerHTML={{ __html: safeHtml }} // Insert sanitized HTML into the div
    />
  );
};

// Export the MarkdownPreview component so it can be used in other files
export default MarkdownPreview;
