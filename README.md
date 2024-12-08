# Markdown Previewer

A **Markdown Previewer** app that converts Markdown text into formatted HTML preview in real-time.

## Table of Contents
1. [Features](#features)  
2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Demo](#demo)  
5. [Tech Stack](#tech-stack)  
6. [Folder Structure](#folder-structure)  
7. [Contributions](#contributions)  
8. [FAQs](#faqs)  
9. [Future Enhancements](#future-enhancements)  
10. [Acknowledgements](#acknowledgements)  
11. [License](#license)

## Features
- **Live Markdown Rendering**: View real-time updates as you write.
- **Syntax Highlighting**: Supports code blocks with proper styling.
- **User-Friendly Interface**: Clean and intuitive layout for ease of use.
- **Cross-Browser Compatibility**: Works across all major browsers.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Anshmittal86/markdown-preview.git

2. Navigate to the project directory:
   ```bash
   cd markdown-preview


3. Install the dependencies:
   ```bash
   npm i


4. Start the development server:
   ```bash
   npm run dev

## Usage

1. Open the app in your browser after running the development server.
2. Type Markdown in the editor panel on the left side.
3. View the rendered output in real-time in the preview panel on the right side.

Enjoy writing and previewing your Markdown effortlessly!

## Demo

Check out the live application [here](https://markdown-preview-virid.vercel.app/).  

## Tech Stack

- **React.js**: Frontend framework for creating interactive UIs.
- **Marked.js**: A Markdown parser and compiler for rendering Markdown text.
- **CSS**: Styling for a clean and responsive user interface.

## Folder Structure 
```
markdown-preview/
├── src/
│   ├── components/       # Reusable UI components
│   ├── utils/            # Utility functions (if needed)
│   ├── App.js            # Main app component
│   ├── index.js          # App entry point
│   └── styles.css        # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
