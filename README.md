# React CI/CD Pipeline Demo

## Overview

This project demonstrates a modern React application integrated with a CI/CD workflow using **GitHub Actions**. It highlights how to streamline development, testing, building, and deployment to **GitHub Pages**.

## Features

* ⚛️ React 19 with Vite
* 🧭 Routing via React Router
* 🎨 Tailwind CSS for styling
* 🔄 GitHub Actions CI/CD pipeline
* 🚀 Auto-deployment to GitHub Pages
* 📊 Real-time dashboard with deployment insights

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/            # Route-based pages
├── App.jsx           # Main application routing
└── main.jsx          # Entry point
```

## Dashboard Insights

The application displays deployment-related metadata, including:

* Application Name
* Version
* Deployment Environment
* GitHub Actions Run ID
* Current Commit SHA

## Pipeline Status Page

A dedicated page shows the status of each CI/CD step:

1. ✅ Code Checkout
2. 📦 Install Dependencies
3. 🧹 Lint Code
4. 🧪 Run Tests
5. 🏗 Build Project
6. 🚀 Deploy to GitHub Pages

## Getting Started

### Prerequisites

* Node.js v18+
* npm or yarn

### Installation

```bash
git clone https://github.com/your-username/react-cicd-demo.git
cd react-cicd-demo
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Lint the codebase:

```bash
npm run lint
```

## CI/CD Workflow

GitHub Actions automate:

* ✅ Linting and tests on pull requests
* 🛠 Building the app
* 🚀 Deploying updates to GitHub Pages after each push to `main`

CI/CD configuration is located in `.github/workflows/deploy.yml`.

## Technologies Used

* **React 19**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **GitHub Actions**

## License

This project is licensed under the [MIT License](LICENSE).