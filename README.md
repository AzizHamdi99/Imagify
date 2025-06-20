# 🖼️ Imagify – AI Image Generator Web App
Imagify is a full-stack web application that allows users to register, log in, and generate stunning images from text prompts using AI. Users can download their generated images with a single click. Built with React, Express, Sequelize ORM, and a SQL database, Imagify offers a modern, responsive interface powered by secure and scalable backend logic.

## 🚀 Features
### 🧑‍💻 User Features
Register and securely log in

Generate AI images from text prompts

Download generated images

View and manage previously generated images

### ⚙️ Admin/Backend Features
Secure authentication using JWT

SQL database integration via Sequelize

RESTful API built with Express.js

## 🧱 Tech Stack
Layer	Technology
Frontend:React.js, Tailwind CSS
Backend:Node.js, Express.js
Database:SQL (PostgreSQL or MySQL) + Sequelize ORM
Authentication:	JWT, Bcrypt
Image Generation:	AI API (clipdrop)



## 🛠️ Getting Started
Prerequisites
Node.js (v18+ recommended)

A SQL database (e.g., PostgreSQL or MySQL)

API key for your image generation provider (e.g., OpenAI)

Installation

# Clone the repository
```bash
git clone https://github.com/AzizHamdi99/Imagify.git
cd Imagify
```
Install Backend Dependencies
```bash
cd backend
npm install
```
Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

Run the App
Start the Backend Server
```bash
cd backend
npm run dev
```
Start the Frontend Development Server
```bash
cd ../frontend
npm start
```
✅ Ensure your SQL database is running and your .env is configured.

🔐 Environment Variables
In the backend folder, create a .env file with the following:

```bash
PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_DIALECT=mysql 
JWT_SECRET=your_jwt_secret
IMAGE_API_KEY=your_image_generation_api_key
```
✅ Future Enhancements
Image history with favorite/save functionality

Premium account for HD or batch generation

Admin dashboard for usage analytics

Image editing/upscaling options

🤝 Contributing
Pull requests are welcome! If you'd like to propose a major change, please open an issue first.

📄 License
This project is open-source and available under the MIT License.

👤 Author
Aziz Hamdi
LinkedIn:https://www.linkedin.com/in/aziz-hamdi-837175286/


