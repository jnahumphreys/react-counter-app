# React Counter App
[React](https://reactjs.org/) based task list single page application.

**Demo:**  
To follow.

## Application overview

This is a simple React based counter app to allow a user to increment, decrement and reset a pesistent counter. Its primary purpose was to act as a demo for the following concepts:

- Replicating a basic Redux style store using a JavaScript reducer along with the React `useReducer` hook.
- Sharing the global state and reducer actions to the application component tree using React `useContext` hook
- Compositional React component patterns
- Unit testing of components using Jest and Enyme, including mocking of ES6 modules
- Dark mode support using `prefers-color-scheme` media query
- React project diretory structure
- npm scripts for CI / CD pipelines

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get this project up and running on your local system you'll need both [npm](https://www.npmjs.com) and [node.js](https://nodejs.org/en/) installed on your development system.

### Installing

To install all dependencies required for the project, clone or download the source `cd` into the project root and from your terminal run:

```bash
npm install
```

### Local development / testing

The project uses [Create React App](https://facebook.github.io/create-react-app/), which includes a local development server `cd` into the project root and run the following command from the terminal:

```bash
npm start
```

Create React App will build a development version of the app. The localhost / local network preview address will be printed to the console.

## Deployment

To build a production copy for deployment `cd` into the project root and run the following command from your terminal:

```bash
npm run build
```

## Built with

- [React](https://reactjs.org/) - JavaScript UI development library
- [Sass](https://sass-lang.com/) - CSS extension language

## Author

Built by James Humphreys - [BinaryJim](https://github.com/BinaryJim)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/binaryjim/react-counter-app/blob/master/license.txt) file for details