import React from 'react';

const MarkdownInput = ({ value, onChange }) => {
  return (
    <textarea
      className="w-full h-64 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
      placeholder="Write your markdown here..."
    />
  );
};

export default MarkdownInput;
