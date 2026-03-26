# contact_manager_webapp
MERN-based Contact Management Web App with CRUD operations, search functionality, and deployment on Render.

## Features

- Add new contacts  
- View all contacts  
- Update contact details  
- Delete contacts  
- Search contacts by phone number or email  
- Fully deployed (Frontend + Backend)  


## Tech Stack

- **Frontend:** React.js, CSS, Fetch API  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Deployment:** Render  


## Project Structure

project-root/
│
├── frontend/ # React frontend
├── backend/ # Express backend + MongoDB
└── README.md


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/contacts | Get all contacts |
| POST   | /api/contacts | Create contact |
| PUT    | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact |
| GET    | /api/contacts/search?query= | Search contacts |


## Setup Instructions

### 1. Clone Repository

git clone https://github.com/your-username/your-repo-name.git


### 2. Backend Setup

- cd backend
- npm install

* Create `.env` file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

* Run backend:

- node server.js


### 3. Frontend Setup

cd frontend
npm install
npm start


## Deployment

- Backend deployed on Render  
- Frontend deployed on Render  


## Key Learnings

- Building REST APIs with Express.js  
- Connecting MongoDB using Mongoose  
- Using Fetch API for frontend-backend communication  
- Handling CORS in production  
- Deploying full-stack MERN applications  


## Author

Aaditya  

