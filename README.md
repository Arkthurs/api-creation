# API Creation

## Description
This project is a RESTful API built using Express.js and MongoDB with Mongoose and using Chart.js for data visualization.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd api-creation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
- Start the server:
  ```bash
  nodemon server.js
  ```
- Access the API at `http://localhost:3000/api`

## Testing
- Run tests:
  ```bash
  npm test
  ```

## Dependencies
- [chart.js](https://www.chartjs.org/): Quick chart creations for the used data from MongoDB.
- [ejs](https://ejs.co/): Embedded JavaScript templates.
- [express](https://expressjs.com/): Web framework for Node.js.
- [mongoose](https://mongoosejs.com/): MongoDB for Node.js.

## Development Dependencies
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env): A Babel preset for each environment and because Jest didn't want to run it without it.
- [babel-cli](https://babeljs.io/docs/en/babel-cli): Babel command line.
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env): Babel preset for compiling JavaScript.
- [@playwright/test](https://www.npmjs.com/package/@playwright/test): A Node.js library for browser automation and E2E testing.
- [jest](https://jestjs.io/): Jest is a framework for testing JavaScript code. Unit testing is the main usage of it.
- [nodemon](https://nodemon.io/): Utility that automatically restarts your Node.js server during development.
- [supertest](https://github.com/visionmedia/supertest): Using Supertest, we can test endpoints and routes on HTTP servers.
