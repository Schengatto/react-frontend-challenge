# Viceversa Frontend Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

By running the command `npm run storybook` it is possible to serve locally the storybook application where you can find all the documentation about the React Components of this project. The default URL is: `http://localhost:6006/`.

### `npm run e2e:cypress:chrome`

Execute E2E tests using Cypress. Make sure to have the react application already served at [http://localhost:8080](http://localhost:8080).

#### Setup

If this is your first time with Cypress, then you will need to install all the dependencies of the project, starting from Node 16 (make sure to download and install the right version for your OS).

Then, once you got Node.js installed, you can run the following command at the root level of this project:

> npm install

Now you can verify if you got Cypress correctly installed on your machine by running the command at the root level of this project:

> cypress -v

## Docker

You can use Docker or docker-compose in order to build and serve this application.

If you have docker-compose installed in your machine just run the following command from the project root:

> docker-compose up -d

Then you should be able to access the application via browser at [http://localhost:8080](http://localhost:8080).
