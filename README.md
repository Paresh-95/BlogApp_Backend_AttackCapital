# Next.js Project with Express Backend and JWT Authentication

Welcome to the **Next.js Project with Express Backend and JWT Authentication**! This project showcases a robust full-stack application integrating Next.js for the frontend and Express.js for the backend. It features secure user authentication using JWT and cookies.

---

## Features

- **Next.js Frontend**: A modern React-based framework for server-side rendering and static site generation.
- **Express Backend**: A lightweight server handling API requests and authentication logic.
- **JWT Authentication**: Secure token-based authentication.
- **Cookie Handling**: Efficient session management using cookies.
- **Scalable Architecture**: A clean separation of concerns for backend and frontend development.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
2. **Install dependencies for both frontend and backend**:

    ```bash
    Copy code
    # Install frontend dependencies 
    cd frontend
    npm install
    # Install backend dependencies
    cd ../backend
    npm install


3. **Create .env files in both frontend and backend folders with the following keys**:

    **Backend .env**:

    ```bash
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    DB_URI=mongodb altas url
    COOKIE_SECRET=your_cookie_secret 

    
4. **Backend .env**:

    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:5000/api



5. **Create .env files in both frontend and backend folders with the following keys**:

    ```bash
    cd backend
    npm start



6. **Start the frontend server**:

    ```bash
    cd AttackCaptial_BlogApp_FRONTEND
    npm run dev


7. **Folder Structue**:

    ```bash
    frontend/
    ├── components/
    ├── pages/
    │   ├── api/
    │   ├── auth/
    │   └── index.js
    ├── styles/
    └── utils/


8. **Folder Structue**:

    ```bash
   backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── server.js
    └── utils/


## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login a user.
- **POST** `/api/auth/logout`: Logout the user.

### User

- **GET** `/api/user/profile`: Get user profile (protected).

---

## Future Enhancements

- Add role-based access control.
- Implement social authentication (Google, Facebook, etc.).
- Enhance UI/UX with additional features.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
