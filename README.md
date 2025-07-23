# React CI/CD Pipeline Demo

## Overview

This is a demonstration project showcasing a modern React application with a Continuous Integration and Continuous Deployment (CI/CD) workflow using GitHub Actions.

## Features

- React 19 with Vite
- Routing with React Router
- Tailwind CSS for styling
- GitHub Actions for CI/CD
- Automated deployment to GitHub Pages

## Project Structure

- `src/`: Source code directory
  - `components/`: Reusable React components
  - `pages/`: Top-level page components
  - `App.jsx`: Main application routing
  - `main.jsx`: Application entry point

## Dashboard Insights

The dashboard provides real-time information about:
- Application Name
- Version
- Deployment Environment
- GitHub Actions Run ID
- Current Commit SHA

## Pipeline Status

The application includes a Pipeline Status page that shows the steps of the CI/CD process:
- Code Checkout
- Install Dependencies
- Lint Code
- Run Tests
- Build Project
- Deploy to GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

- Run development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Lint code:
  ```bash
  npm run lint
  ```

## CI/CD Workflow

This project uses GitHub Actions for:
- Automated testing
- Code linting
- Building the application
- Deploying to GitHub Pages

## Technologies

- React 19
- Vite
- React Router
- Tailwind CSS
- GitHub Actions

## License

[Add your license information here]
