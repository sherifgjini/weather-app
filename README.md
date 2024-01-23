# Weather App

## Introduction

This project is built with Next.js version 14.2.

## Description

The Weather App consists of a home page and a city page to display weather information for various cities searched using autocomplete. The home page's data is dynamic and relies on Geolocation, making it not server-side rendered. However, the city page is server-side rendered. The application utilizes Geolocation and autocomplete to fetch weather details for different locations.

### Technologies Used

- SCSS and SCSS Modules for enhanced performance and responsiveness across mobile, tablet, and desktop devices.
- Dynamic loading (code-splitting) of some components for optimal performance.
- Next-Auth for user authentication
- Redux for global state managment
- Error handling implemented for both server-side components (e.g., `error.tsx`) and client components using standard promise error handling.
- Unit testing for critical and larger components using JEST and react-testing-library.
- Continuous Integration/Continuous Deployment (CI/CD) pipelines for running tests on pull requests before merging into a specific branch.
- Deployment on Vercel.

### Historical Weather Data Visualization

For visualizing historical weather data, Recharts.js is integrated into the app.

### SEO Performance

Server-side rendering is applied to the city page, contributing to excellent SEO performance.

## User Authentication

The project uses Next-Auth for user authentication, enabling users to log in with Google. Next-Auth manages its own state, ensuring users remain logged in even on page reloads. Due to this, Redux was deemed redundant in this particular case.

## State Management

Weather data are stored in Redux and shared across components for efficient state management.

## Setup and Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm run dev`.

## Contributors

- [Your Name]
- [Contributor 1]
- [Contributor 2]

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.
