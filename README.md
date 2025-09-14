# College Resource System

This is a full-stack web application designed to help students manage their college resources, including notes, assignments, and events.

## Features

*   **User Authentication:** Secure user registration and login system.
*   **Dashboard:** A central place for users to see an overview of their resources.
*   **Notes Management:** Upload, view, and manage course notes.
*   **Assignments Tracker:** Keep track of upcoming assignments and their due dates.
*   **Event Calendar:** Schedule and view important college events.
*   **Role-based Access Control:** Different roles for students and teachers/admins.

## Tech Stack

### Frontend

*   React.js
*   Vite
*   React Router
*   CSS

### Backend

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JWT for Authentication
*   Multer for file uploads

## Getting Started

### Prerequisites

*   Node.js and npm
*   MongoDB

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/college-resource-system.git
    cd college-resource-system
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following variables:
    ```
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```
    Start the backend server:
    ```bash
    npm start
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    Start the frontend development server:
    ```bash
    npm run dev
    ```

## Folder Structure

```
college-resource-system/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

