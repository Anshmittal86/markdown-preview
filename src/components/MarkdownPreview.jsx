import React from "react";

import DOMPurify from "dompurify";
import { marked } from "marked";

const MarkdownPreview = ({ markdown }) => {
  const html = marked(markdown);
  const safeHtml = DOMPurify.sanitize(html);

  return (
    <div
      className="prose max-w-full p-4 border rounded-md bg-gray-100"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
};

export default MarkdownPreview;
