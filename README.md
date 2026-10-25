# Library Management System

Full-stack Library Management System to manage books and members, with search by title and author.

## Tech Stack

- **Backend:** Java 17, Spring Boot 3, Spring Data JPA (Hibernate), Bean Validation
- **Database:** MySQL
- **Frontend:** React 18 (Vite), Axios
- **Build tools:** Maven, npm

## Features

- Full CRUD (Create, Read, Update, Delete) for Book, Member
- Search with case-insensitive keyword matching
- Input validation with clear error messages
- Global exception handling with proper HTTP status codes
- Layered architecture: Controller → Service → Repository → Entity
- Responsive React UI with tabbed navigation

## Project Structure

```
library-management-system/
├── backend/                 # Spring Boot REST API
│   ├── pom.xml
│   └── src/main/java/com/library/
│       ├── config/          # CORS configuration
│       ├── controller/      # REST controllers
│       ├── entity/          # JPA entities
│       ├── exception/       # Custom exceptions & global handler
│       ├── repository/      # Spring Data JPA repositories
│       └── service/         # Business logic
└── frontend/                # React + Vite UI
    └── src/
        ├── components/
        ├── api.js
        └── App.jsx
```

## Getting Started

### Prerequisites

- Java 17+
- Maven 3.8+
- MySQL 8+
- Node.js 18+

### 1. Database

The database `library_db` is created automatically. Update the MySQL username and password in
`backend/src/main/resources/application.properties` if they are not `root` / `root`.

### 2. Run the backend

```bash
cd backend
mvn spring-boot:run
```

The API runs on `http://localhost:8080`.

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## REST API Endpoints

### Book

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all |
| GET | `/api/books/{id}` | Get by ID |
| GET | `/api/books/search?keyword=` | Search by title |
| POST | `/api/books` | Create |
| PUT | `/api/books/{id}` | Update |
| DELETE | `/api/books/{id}` | Delete |

### Member

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/members` | Get all |
| GET | `/api/members/{id}` | Get by ID |
| GET | `/api/members/search?keyword=` | Search by name |
| POST | `/api/members` | Create |
| PUT | `/api/members/{id}` | Update |
| DELETE | `/api/members/{id}` | Delete |

## Author

Built as a Java Full Stack portfolio project.
