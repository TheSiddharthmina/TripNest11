# TripNest 🌍

TripNest is a full-stack travel and accommodation platform that enables users to discover unique stays, create property listings, share reviews, and manage their travel experiences through a modern and responsive web interface.

Built using Node.js, Express.js, MongoDB Atlas, and Cloudinary, TripNest provides a seamless experience for both travelers and property hosts.

---

## 🚀 Features

* Secure User Authentication
* Property Listing Management
* Review & Rating System
* Image Uploads with Cloudinary
* Interactive Maps Integration
* Search & Category Filters
* Responsive Mobile-Friendly Design
* Session-Based Authentication
* Server-Side Validation using Joi
* MongoDB Atlas Cloud Database

---


## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js
* Passport.js
* Joi Validation

### Database & Storage

* MongoDB Atlas
* Mongoose
* Cloudinary

### Tools

* Git
* GitHub
* VS Code

---

## 📂 Project Structure

TripNest follows the MVC (Model-View-Controller) architecture:

controllers/
models/
routes/
views/
public/
utils/

This architecture keeps business logic, presentation, and routing separated, making the application easier to maintain and scale.

---

## 🔐 Authentication

TripNest uses Passport.js for authentication and session management.

Features include:

* User Registration
* User Login
* Secure Password Hashing
* Protected Routes
* Session Persistence

---

## ☁️ Cloud Services

### MongoDB Atlas

Stores:

* User Accounts
* Property Listings
* Reviews
* Session Data

### Cloudinary

Handles:

* Property Images
* Image Optimization
* Cloud Storage

---

## ⚙️ Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Create a .env file:

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

ATLASDB_URL=your_mongodb_connection_string

MY_SECRET=your_session_secret

SEED_USER_PASSWORD=your_seed_password

Run the application:

node app.js

Open:

http://localhost:8080

---

## 🌱 Database Seeding

To generate sample users, listings, and reviews:

node init/init.js

Note:
Running the seed script will overwrite existing seeded data.

---

## 🚀 Deployment

TripNest can be deployed using:

* Render
* MongoDB Atlas
* Cloudinary

Environment variables should be configured on the hosting platform before deployment.

---

## 📜 License

This project is available under the MIT License.

---

## 👨‍💻 Developer

Siddharth Mina

Built as a full-stack web application for learning, experimentation, and real-world development experience.
