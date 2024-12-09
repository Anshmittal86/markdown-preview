// Importing React and useState for state management
import React, { useState } from "react";
// Importing child components for Markdown input and preview functionality
import MarkdownInput from "./components/MarkdownInput";
import MarkdownPreview from "./components/MarkdownPreview";

// Defining the main App component
const App = () => {
  // Defining a state variable 'markdown' to hold the user's input
  const [markdown, setMarkdown] = useState("");

  // Handler function to update 'markdown' state when input changes
  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    // Main container with responsive and styled layout
    <div className="container mx-auto py-10 font-Inter font-normal px-3">
      {/* Application title with gradient text effect */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text py-2">
        Markdown Playground
      </h1>
      {/* Subtitle text under the heading */}
      <p className="text-center text-gray-500 mt-2">
        Effortlessly create and preview your markdown in style!
      </p>
      {/* Grid layout for input and preview components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Markdown input component */}
        <MarkdownInput value={markdown} onChange={handleInputChange} />
        {/* Markdown preview component */}
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
};

// Exporting the App component to be rendered by the application
export default App;
