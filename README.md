# Frontend Documentation

This document provides an overview of the frontend structure, components, and functionality of the Contacts Manager Application. It is intended to assist developers, designers, and stakeholders in understanding the frontend implementation.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Components](#components)
3. [Routing](#routing)
4. [State Management](#state-management)
5. [Styling](#styling)
6. [API Integration](#api-integration)
7. [Authentication](#authentication)
8. [Known Issues](#known-issues)
9. [Future Improvements](#future-improvements)

---

## 1. Project Structure <a name="project-structure"></a>

The frontend of the Contacts Manager Application is organized as follows:

- `src/` : Contains the source code of the frontend.
  - `assets/` : Contains static assets like images, CSS files, and fonts.
  - `components/` : Contains reusable React components.
  - `pages/` : Contains page components that define the structure of individual pages.
  - `App.js` : Main entry point of the application.
  - `index.js` : Entry point to render the application.

---

## 2. Components <a name="components"></a>

### Header

- **Description**: Renders the application header with navigation links and user authentication options.

### ContactList

- **Description**: Displays a list of contacts with options to edit or delete each contact.

### ContactForm

- **Description**: Provides a form to add a new contact with fields for name, email, and phone.

### UpdateContactForm

- **Description**: Displays a form to edit an existing contact's information.

### RegisterForm

- **Description**: Renders a form for user registration.

### LoginForm

- **Description**: Displays a form for user login.

---

## 3. Routing <a name="routing"></a>

The application uses `react-router-dom` for client-side routing. Routes are defined in `App.js` using the `<Route>` component.

- `/` : Displays the list of contacts.
- `/add-contact` : Renders the contact form for adding a new contact.
- `/register` : Renders the registration form.
- `/login` : Renders the login form.

---

## 4. State Management <a name="state-management"></a>

The frontend uses React's built-in `useState` and `useEffect` hooks for managing component-level state. No global state management library (e.g., Redux) is used.

State is managed within components, and props are used for passing data between parent and child components.

---

## 5. Styling <a name="styling"></a>

The application utilizes both custom CSS and the Bootstrap library for styling.

- Custom CSS files are stored in `src/assets/css/` and are imported into components as needed.
- Bootstrap classes are applied for consistent styling of elements like buttons, forms, and navigation.

---

## 6. API Integration <a name="api-integration"></a>

The frontend communicates with the backend via HTTP requests using the `fetch` API. API endpoints are defined in the backend and accessed in the frontend using relative URLs.

- The base URL for API requests is `http://localhost:5001/api`.

---

## 7. Authentication <a name="authentication"></a>

- User authentication is implemented using a JWT (JSON Web Tokens) based system.
- When a user registers or logs in, a JWT token is generated on the server and sent to the client for subsequent authenticated requests.
- The token is stored in the frontend and included in the headers of API requests.

---

## 8. Known Issues <a name="known-issues"></a>

- Concurrent updates to the same contact are not currently handled, which could lead to potential data inconsistencies.

---

## 9. Future Improvements <a name="future-improvements"></a>

- Implement user roles and permissions to allow for different levels of access within the application.
- Incorporate automated testing for both unit tests and integration tests.
- Introduce logging and monitoring solutions for performance tracking and error handling.

---

This frontend documentation provides a comprehensive overview of the structure and functionality of the Contacts Manager Application. It serves as a reference for developers working on the frontend of the application and can be used to understand its implementation.
