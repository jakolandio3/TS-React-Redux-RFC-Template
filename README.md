# React-Redux template Functional Component version (with TS + TailwindCss)

This application is a React-Redux template designed to streamline the development process by integrating TypeScript and TailwindCSS. It provides a robust structure for building scalable and maintainable web applications.
The template includes pre-configured Redux for state management, TypeScript for type safety, and TailwindCSS for utility-first styling. It aims to serve as a learning tool and a reference for best practices in React and Redux application development, ensuring consistent error-free rendering and strict type checking throughout the project.

![Sample-Project](/public//Screenshot%202024-11-28%20175750.png)

## Purpose

1. Create a template for using React and Redux with Typescript
2. Create re-usable components (Classes or functional Components) for ease of development
3. Provide a reference to structure of Redux and React Apps
4. Provide a Learning tool to build upon
5. Be able to render components on the client side with no Errors or type warnings consistently
6. Fetch data with strict type references and update/delete items on the client side
7. API driven fetching handled by Reducer functions and middleware (thunk)
8. Filter based API fetching and Data handling with Strict TypeChecking

## Installation

To get started with this React-Redux template, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/yourusername/TS-React-Redux-RFC-Template.git
```

2. Navigate to the project directory:

```sh
cd react-typescript-redux-rfc-framework
```

3. Install the dependencies:

```sh
npm install
```

## Usage

After completing these steps, you can start the development server using `npm start` and begin working on your project.
The example project on this template has a repository fetch function, if you wish to do the same to get started create a `.env` file. in the root directory and add:

```env
REACT_APP_DATABASE=your-API-URL;

```

## Technologies Used

This project leverages the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Redux Thunk**: Middleware that allows you to write action creators that return a function instead of an action.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **DaisyUI**: A plugin for TailwindCSS that provides a set of accessible UI components.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **npm**: A package manager for JavaScript and the default package manager for Node.js.

These technologies work together to provide a robust and efficient development environment for building scalable and maintainable web applications.

## Available Scripts

1.`npm start`: Runs the app in the development mode.(default on Localhost:3000)

2.`npm run build`: Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Authors

- @jakolandio3

## Feedback

If you have any feedback, please reach out to me at [jakobdouglas.dev@gmail.com](mailto:jakobdouglas.dev@gmail.com)
