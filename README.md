# Building a JSX Renderer

This project demonstrates how to build a minimal JSX renderer from scratch using JavaScript. It mimics the core functionality of React's rendering engine—transforming JSX into virtual DOM objects and rendering them into actual DOM elements.

**Note:** JSX is compiled by Vite into `jsx()` function calls. All rendering logic is implemented manually, without React or any virtual DOM library.

## Installation

**Download** or **clone** the repository to run locally:

```zsh
git clone https://github.com/itsjoelle/jsx-renderer.git
```

### Install Dependencies

Ensure you have Node.js installed and then install the required dependencies:

```zsh
npm install
```

### Run the Server

To start the development server and test the renderer in your browser:

```zsh
npm run dev
```

## Features

- **Custom JSX Factory**  
  Uses a lightweight `jsx()` function to create virtual DOM elements without React.

- **Component Support**  
  Supports function components, enabling a familiar component-based structure.

- **Recursive Rendering**  
  Virtual elements are rendered recursively into actual DOM nodes, including nested components and children.

## How It Works

JSX elements are compiled by Vite using a custom JSX factory (jsx and jsxs) defined in `my-react.js`. These functions return plain JavaScript objects representing virtual DOM nodes.

The `render()` function takes these virtual nodes and transforms them into real DOM elements, handling component functions, text nodes, props, and children recursively.

This replicates the core logic of React’s rendering pipeline, without the overhead of a full library.

## Folder Structure

- **main.jsx**: Entry point where the virtual components are defined and rendered into the DOM.

- **my-react.js**: Contains the custom `jsx()` and `jsxs()` functions that replace React.createElement.

- **vite.config.js**: Configures Vite to use the custom JSX factory instead of React’s.

- **index.html**: Basic HTML structure including a root container.

## Contributing

Feel free to fork the repository and **submit pull requests** if you want to:

Add new features like event handling or fragment support.

Implement more React features.

Convert the project to TypeScript, start by adding a tsconfig.json and setting **compilerOptions**:

```zsh
"jsx": "react-jsx",
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
