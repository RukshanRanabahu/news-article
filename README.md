## News Article Single Page App

This is a single-page news article application built using Next.js. It was developed as part of a React Developer interview practical test. The application demonstrates the use of various React and Next.js features, along with modern UI libraries to create a responsive and dynamic web page that displays news article content.

## Features

Next.js Framework: Utilizes Next.js for server-side rendering and optimized performance.
Dynamic Content Rendering: Displays dynamic news article content using a JSON data file.
Responsive UI: Responsive design implemented using Tailwind CSS and @nextui-org/react components.
Reusability: Custom reusable components like Content and HeaderMenu for easy maintenance and extension.
SVG Icons: Includes custom SVG icons for social sharing and bookmarking.
Newsletter Subscription: A mock newsletter subscription form with validation.
Styled Components: Use of Tailwind CSS and @nextui-org/react for efficient styling and layout.
Technologies Used
React.js: Core library for building the UI.
Next.js: Framework for server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework for styling.
@nextui-org/react: UI components for React applications.
JavaScript: Logic implementation and interaction.
SVG Icons: Custom icons for various functionalities.

## Getting Started

- Prerequisites
Make sure you have the following installed on your system:

Node.js (v14 or above)
npm or yarn

- Installation

Clone the repository:
git clone https://github.com/RukshanRanabahu/news-article.git

Navigate to the project directory:
cd news-article

Install the dependencies:
npm install

or if using yarn:
yarn install

- Running the Application

To run the application in development mode, use the following command:
npm run dev

or if using yarn:
yarn dev

Open your browser and navigate to http://localhost:3000 to see the application in action.

## Building for Production

To create an optimized production build:
npm run build

or if using yarn:
yarn build

Then, you can start the production server:
npm start

or if using yarn:
yarn start

## Deployment
This project can be deployed to any hosting service that supports Next.js, such as Vercel, Netlify, or any Node.js-compatible service.

Folder Structure
.
├── components
│   ├── HeaderMenu.js        # Header component with navigation links and dropdown
│   ├── Content.js           # Main content component to render the news article
│   └── icons                # Custom SVG icons for various functionalities
├── dummy-data
│   ├── article.json         # JSON file containing the news article content
│   └── header.json          # JSON file containing header menu items
├── pages
│   └── index.js             # Main entry point of the application
├── public                   # Public assets and images
├── styles                   # Global styles and Tailwind CSS configuration
│   └── globals.css
└── README.md                # This file

## Future Improvements

API Integration: Replace dummy JSON data with a live API to fetch real-time news articles.
Enhanced Search and Filter: Implement search and filtering capabilities to browse through various news topics.
State Management: Use a state management library like Redux or React Context API for better state handling.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For any inquiries or feedback, feel free to reach out:

Email: rukshanranabahu@gmail.com
GitHub: RukshanRanabahu
