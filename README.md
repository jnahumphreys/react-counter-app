# React Counter App

[React](https://reactjs.org/) based counter single page application built with [TypeScript](https://www.typescriptlang.org/).

**Demo:**  
[https://binaryjim.github.io/react-counter-app/](https://binaryjim.github.io/react-counter-app/)

## Application overview

This is a simple React based counter app to allow a user to increment, decrement and reset a pesistent counter. Its primary purpose was to act as a demo for the following concepts:

- TypeScript source within a React based project
- CSS in JS styling using emotion
- Replicating a basic Redux style store using a JavaScript reducer along with React `useReducer` hook.
- Sharing the global state and reducer actions to the application component tree using React `useContext` hook
- Dark mode support using `prefers-color-scheme` media query
- Husky pre-commit hooks for linting and formatting
- GitHub actions for CI / CD pipelines

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get this project up and running on your local system you'll need both [npm](https://www.npmjs.com) and [node.js](https://nodejs.org/en/) installed on your development system. **Note:** Requires LTS version of node, currently v16

### Installing

To install all dependencies required for the project, clone or download the source `cd` into the project root and from your terminal run:

```bash
npm install
```

### Local development

The project uses [Create React App](https://facebook.github.io/create-react-app/), which includes a local development server `cd` into the project root and run the following command from the terminal:

```bash
npm start
```

Create React App will build a development version of the app. The localhost / local network preview address will be printed to the console.

#### Available development scripts

#### Lint source

Will lint all source (js, jsx, ts, tsx) within the source directory using ESLint.

```bash
npm run lint
```

#### Check formatting

Will check formatting of all files within the source directory using Prettier.

```bash
npm run check-formatting
```

#### Check and fix formatting

As above will check formatting, fix any issues and write changes.

```bash
npm run fix-formatting
```

### Pre-commit hooks

Pre-commit hooks will run using Husky to:

- Lint all committed source (js, jsx, ts, tsx) using ESLint rules
- Format all known filetypes using Prettier

## Deployment

To build a production copy for deployment `cd` into the project root and run the below command from your terminal. **Note:** The build will be performed as per the `homepage` key in `package.json`.

```bash
npm run build
```

## Built with

- [TypeScript](https://www.typescriptlang.org/) - Typed extenstion of JavaScript
- [React](https://reactjs.org/) - JavaScript UI development library
- [Emotion](https://emotion.sh/) - CSS in JavaScript library

## Author

Built by James Humphreys - [BinaryJim](https://github.com/BinaryJim)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](https://github.com/binaryjim/react-counter-app/blob/master/license.txt) file for details
