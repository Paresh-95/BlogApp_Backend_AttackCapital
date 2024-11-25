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
   #Clone frontend
   git clone https://github.com/Paresh-95/BlogApp_Frontend_AttackCapital.git
   cd AttackCaptial_BlogApp_FRONTEND


    #Clone backend
   git clone https://github.com/Paresh-95/BlogApp_Backend_AttackCapital.git
   cd backend
   
2. **Install dependencies for both frontend and backend**:

    ```bash
    Copy code
    # Install frontend dependencies 
    cd AttackCaptial_BlogApp_FRONTEND
    npm install
    # Install backend dependencies
    cd backend
    npm install


3. **Create .env files in both frontend and backend folders with the following keys**:

    **Backend .env**:

    ```bash
    PORT=port
    JWT_SECRET=your_jwt_secret_key
    DB_URI=mongodb_altas_url
    CLOUDINARY_CLOUD_NAME=cloudinary_cloud_name
    CLOUDINARY_API_KEY=cloudinary_api_key
    CLOUDINARY_API_SECRET=cloudinary_api_secret
    
    

    
4. **Backend .env**:

    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    NEXT_PUBLIC_TINYMCE_API_KEY=tinymce_api_key


5. **Create .env files in both frontend and backend folders with the following keys**:

 



6. **Start the frontend server**:

    ```bash
    cd AttackCaptial_BlogApp_FRONTEND
    npm run dev

    cd backend
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

- **POST** `/api/v1/auth/register`: Register a new user.
- **POST** `/api/v1/auth/login`: Login a user.
- **POST** `/api/v1/auth/logout`: Logout the user.

### User

- **GET** `/api/v1/auth/use`: Get user profile (protected).

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
