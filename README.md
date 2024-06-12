Social Media Login & Registration Application

Overview
This is a simple social media login and registration application built with Express.js for the backend and HTML, CSS, and JavaScript for the frontend. The application includes user registration, login, and password change functionalities. It also features unit and end-to-end tests using Jest and Cypress.

Features
User Registration: Users can register by providing a username and password.
User Login: Registered users can log in using their credentials.
Password Change: Logged-in users can change their password.
Mock Database: User data is stored in a mock database.
Testing: Includes unit tests for backend functions using Jest and end-to-end tests using Cypress.
GitHub Actions: Automated testing on every push to the repository.

Installation
Clone the repository:
git clone https://github.com/wpplng/social-media-app.git
cd social-media-app

Install dependencies:
npm install

Run the server:
node src/server.js

Open your browser and navigate to http://localhost:8080.

Usage
Register a New User
Go to the registration section.
Enter a username and password.
Click the "Register" button.
If successful, you will see an alert confirming registration.

Login
Go to the login section.
Enter your username and password.
Click the "Login" button.
If successful, you will be redirected to the dashboard.

Change Password
On the frontend webb app you can only change password if logged in as user "newuser" since there is no database.
Enter a new password in the change password section.
Click the "Change Password" button.
If successful, you will see an alert confirming the password change.

Testing
Jest Unit Tests
Setup and run Jest tests:
npm run test

Cypress End-to-End Tests
Setup and run Cypress tests:
npx cypress open

GitHub Actions
Tests are automatically run on every push to the repository. The workflow file is located in .github/workflows/test.yml.

Technologies Used
Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript
Testing: Jest, Cypress
CI/CD: GitHub Actions
