// Third-party imports
import React, { useEffect, useMemo } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";

// CSS imports (theme styles for syntax highlighting)
import "highlight.js/styles/github-dark.css";

/**
 * MarkdownPreview Component
 *
 * Converts Markdown to HTML, sanitizes it to prevent XSS,
 * and applies syntax highlighting to code blocks.
 *
 * @param {Object} props
 * @param {string} props.markdown - The Markdown string to preview.
 */
const MarkdownPreview = ({ markdown }) => {

  // Memoize the conversion and sanitization of the markdown for performance
  const safeHtml = useMemo(() => {

    const rawHtml = marked(markdown);

    return DOMPurify.sanitize(rawHtml);

  }, [markdown]);

  // Run syntax highlighting after every markdown update
  useEffect(() => {

    hljs.highlightAll();
    
  }, [markdown]);

  return (
    <div
      className="prose max-w-full p-4 border rounded-md bg-gray-100"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
};

export default MarkdownPreview;
