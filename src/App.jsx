import React, { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownPreview from "./components/MarkdownPreview";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container mx-auto py-10 font-Inter font-normal">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text py-2">
        Markdown Playground
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Effortlessly create and preview your markdown in style!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <MarkdownInput value={markdown} onChange={handleInputChange} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
