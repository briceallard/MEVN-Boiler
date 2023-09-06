# MEVN Stack Boilerplate with Vue 3, Pinia, Vue Router 4, Express, MongoDB, and Docker Compose

![MEVN Stack](https://img.shields.io/badge/MEVN-Stack-brightgreen.svg)
![Vue](https://img.shields.io/badge/Vue-3.x-green.svg)
![Pinia](https://img.shields.io/badge/Pinia-2.x-blue.svg)
![Vue Router](https://img.shields.io/badge/Vue%20Router-4.x-lightblue.svg)
![Express](https://img.shields.io/badge/Express-5.x-red.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.x-green.svg)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-3.x-blue.svg)

A boilerplate project to kickstart your MEVN (MongoDB, Express, Vue, Node.js) stack application development with Vue 3, Pinia, Vue Router 4, Express, MongoDB, and Docker Compose.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Production](#production)
- [Docker Compose](#docker-compose)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This MEVN stack boilerplate provides a starting point for building modern web applications using the following technologies:

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **Pinia**: A state management library for Vue 3 applications.
- **Vue Router 4**: The official router for Vue.js 3.
- **Express**: A fast, unopinionated, and minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing and managing application data.
- **Docker Compose**: A tool for defining and running multi-container Docker applications.

Use this boilerplate as a foundation for your project and customize it to suit your specific needs.

## Features

- Vue 3 with Pinia for state management.
- Vue Router 4 for client-side routing.
- Express server for handling API requests.
- MongoDB integration for database storage.
- Docker Compose setup for easy development and production deployment.
- Basic project structure with examples to get you started.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **Docker and Docker Compose**: You'll need Docker and Docker Compose installed to run the application in containers. You can get them from [Docker's official website](https://www.docker.com/).

- **MongoDB**: If you want to run MongoDB locally, you can install it from the [MongoDB website](https://www.mongodb.com/try/download/community).

## Getting Started

Follow these steps to get the MEVN stack boilerplate up and running:

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Change directory to the project folder:

   ```shell
   cd your-repo
   ```

3. Install server dependencies:

   ```shell
   cd server
   npm install
   ```

4. Install client dependencies:

   ```shell
   cd ../client
   npm install
   ```

5. Return to the project root directory:

   ```shell
   cd ..
   ```

## Project Structure

The project is structured as follows:

- `client`: Vue 3 front-end application.
- `server`: Express.js back-end API server.
- `docker-compose.yml`: Docker Compose configuration file.
- `README.md`: This README file.
- `LICENSE`: The license file.

Feel free to modify the project structure to suit your application's needs.

## Configuration

- Server configuration: You can configure the server settings in the `server/config.js` file.

- Client configuration: Modify the client settings in the `client/src/config.js` file.

- MongoDB configuration: Update the MongoDB connection string in the `server/config.js` file.

## Development

To start the development environment:

1. Start the MongoDB container (if not already running):

   ```shell
   docker-compose up -d mongo
   ```

2. Start the Express server:

   ```shell
   cd server
   npm run dev
   ```

3. Start the Vue 3 client:

   ```shell
   cd client
   npm run serve
   ```

The development server for the client will be available at `http://localhost:8080`, and the Express API server at `http://localhost:3000`.

## Production

To build and run the application in production mode:

1. Build the Vue 3 client:

   ```shell
   cd client
   npm run build
   ```

2. Start the Express server in production mode:

   ```shell
   cd server
   npm start
   ```

The production server will be available at `http://localhost:3000`.

## Docker Compose

You can also use Docker Compose for development and production:

- Development:

  ```shell
  docker-compose up
  ```

- Production:

  ```shell
  docker-compose -f docker-compose.prod.yml up -d
  ```

## Contributing

Contributions are welcome! Please feel free to submit issues, pull requests, or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
