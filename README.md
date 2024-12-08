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


## Contributions

We welcome contributions! Here’s how you can contribute to the project:

1. **Fork the repository** by clicking the "Fork" button at the top right of the page.
2. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/Anshmittal86/markdown-preview.git

3. Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature-name


4. Make your changes and commit them with a meaningful message:
    ```bash
    git commit -m "Add feature-name"


5. Push your changes to your fork:
    ```bash
    git push origin feature-name


6. Submit a pull request with a description of the changes you made.

## FAQs

**Q: Does this app support all Markdown syntax?**  
A: Yes, it supports common Markdown syntax like headings, lists, links, and images.

**Q: How can I add new features?**  
A: Fork the repository, add your features in a new branch, and submit a pull request.

**Q: Can I use this app offline?**  
A: Not at the moment, but you can run it locally by cloning the repository.

**Q: Is this app responsive on mobile devices?**  
A: Yes, the app is designed to be mobile-friendly.


## Future Enhancements

- **Offline Support**: Implement local storage or service workers to enable offline usage.
- **Theme Options**: Add support for light and dark themes for better user experience.
- **Real-Time Collaboration**: Enable users to share their markdown content and collaborate in real-time.
- **More Markdown Features**: Extend support for advanced Markdown syntax, such as tables and footnotes.
- **Export Options**: Add the ability to export Markdown content as HTML or PDF.

## Acknowledgements

- **React**: A JavaScript library for building user interfaces.
- **Marked.js**: Markdown parser and compiler used for rendering Markdown content.
- **CSS**: Used for styling and creating a clean, responsive layout.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
