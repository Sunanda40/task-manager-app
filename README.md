# Task Manager App

## Overview

This is a Task Manager application built using React.js, Node.js, and Express.js.

The application allows users to:

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Filter Tasks by Status

Task data is stored in a JSON file on the backend.

---

## Tech Stack

### Frontend

* React.js
* Axios
* Vite

### Backend

* Node.js
* Express.js
* CORS

### Storage

* JSON File (`task.json`)

---

## Project Structure

task-manager-app

├── backend

│ ├── data

│ │ └── task.json

│ ├── routes

│ │ └── taskRoutes.js

│ ├── index.js

│ └── package.json

│

└── frontend

├── src

│ ├── components

│ │ ├── TaskForms.jsx

│ │ ├── TaskList.jsx

│ │ ├── TaskCard.jsx

│ │ └── FilterBar.jsx

│ │

│ ├── services

│ │ └── taskService.js

│ │

│ ├── App.jsx

│ └── main.jsx

└── package.json

---

## Features

### Create Task

Users can add new tasks with:

* Title
* Description
* Status

### View Tasks

All tasks are displayed in a list.

### Edit Task

Users can update existing tasks.

### Delete Task

Users can remove tasks.

### Filter Tasks

Tasks can be filtered by:

* All
* To Do
* In Progress
* Done

---

## API Endpoints

### Get All Tasks

GET /api/tasks

### Create Task

POST /api/tasks

### Update Task

PUT /api/tasks/:id

### Delete Task

DELETE /api/tasks/:id

---

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Application Flow

User Action

↓

React Frontend

↓

Axios API Request

↓

Express Backend

↓

task.json Storage

↓

Response Returned

↓

UI Updated

---

## Future Improvements

* MongoDB Integration
* User Authentication
* Search Functionality
* Pagination
* Responsive UI Design
* Deployment to Cloud

