Job Listing Platform - Backend
This is the backend for the Job Listing Platform, built using Node.js, Express, SQLite, and Sequelize ORM. It follows MVC architecture and includes role-based access control (RBAC), authentication, and job management features.

🚀 Features
User Authentication (Signup, Login, Profile)
Role-Based Access Control (RBAC) (user can manage their own jobs, admin has full control)
Job Management (Create, Update, Delete, Fetch Jobs)
Profile Image Upload (Using Cloudinary)
Secure API (JWT-based authentication)
CORS Enabled
SQLite Database with Sequelize ORM
🛠️ Setup Instructions
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/job-listing-platform.git
cd job-listing-platform/backend
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
PORT=5000
JWT_SECRET=your_secret_key

# SQLite Database
DATABASE_STORAGE=./database.sqlite

# Cloudinary (For Profile Image Uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
4️⃣ Run the Server
bash
Copy
Edit
npm start
The server will run at http://localhost:5000

📌 API Endpoints
🧑 User Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login a user and get JWT
GET	/api/auth/profile	Get logged-in user details
POST	/api/auth/upload	Upload profile image
PUT	/api/auth/edit	Edit user details
DELETE	/api/auth/delete/:id	Delete a user (Self or Admin only)
GET	/api/auth/user/:id	Get a single user (Admin only)
GET	/api/auth/users	Get all users (Admin only)
💼 Job Management
Method	Endpoint	Description
GET	/api/jobs	Get all jobs
GET	/api/jobs/:id	Get job details by ID
POST	/api/jobs	Create a job (Authenticated user)
PUT	/api/jobs/:id	Update a job (Only owner or admin)
DELETE	/api/jobs/:id	Delete a job (Only owner or admin)
🚀 Deployment (Render)
1️⃣ Create a New Web Service on Render
Go to Render and create a new Web Service.
Connect your GitHub repository.
2️⃣ Set Environment Variables on Render
Add all .env variables in Render's Environment Variables section.
3️⃣ Update package.json for Production
json
Copy
Edit
"scripts": {
  "start": "node server.js"
}
4️⃣ Deploy
Click Deploy and Render will handle the rest!

🔥 Tech Stack
Backend: Node.js, Express.js
Database: SQLite with Sequelize ORM
Authentication: JWT (JSON Web Token)
File Uploads: Cloudinary
Deployment: Render
📝 License
This project is MIT Licensed.
