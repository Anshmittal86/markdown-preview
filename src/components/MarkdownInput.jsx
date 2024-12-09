// Importing React for creating the component
import React from "react";

// Defining a functional component that takes 'value' and 'onChange' props
const MarkdownInput = ({ value, onChange }) => {
  return (
    // Rendering a textarea input for users to write Markdown
    <textarea
      // Adding styling using Tailwind CSS classes
      className="w-full h-64 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      // Binding the textarea's value to the 'value' prop for controlled input
      value={value}
      // Triggering the 'onChange' function when the input changes
      onChange={onChange}
      // Adding a placeholder to guide the user on what to write
      placeholder="Write your markdown here..."
    />
  );
};

// Exporting the component to use it in other parts of the application
export default MarkdownInput;
