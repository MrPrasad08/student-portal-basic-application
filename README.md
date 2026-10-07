# 🎓 Student Portal REST API

A full-stack **Student Portal application** built using **Spring Boot REST API** and **React.js**.

The backend provides CRUD operations for managing student information and integrates with a React frontend using REST APIs.

## 🚀 Technologies Used

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- REST API
- MySQL
- Maven

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios

### Tools
- Eclipse / IntelliJ IDEA
- VS Code
- MySQL Workbench
- Postman
- Git
- GitHub

## 📁 Project Structure

```text
Student-Portal/
│
├── backend/
│   └── src/
│       └── main/
│           └── java/
│               └── com.spring2.studentPortal/
│                   ├── controller/
│                   │   └── StudentController.java
│                   ├── model/
│                   │   └── Student.java
│                   ├── repository/
│                   │   └── StudentRepository.java
│                   └── service/
│                       └── StudentService.java
│
└── frontend/
    └── React Application
```

## 🔥 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/student/msg` | Test API message |
| POST | `/student/createStudent` | Create a student |
| GET | `/student/getStudent/{id}` | Get student by ID |
| GET | `/student/getAllStu` | Get all students |
| PUT | `/student/updateStudent/{id}` | Update student |
| DELETE | `/student/deleteStudent/{id}` | Delete student |

## 🔗 API Base URL

```text
http://localhost:8080/student
```

## 📝 Example Request

### Create Student

```http
POST /student/createStudent
```

```json
{
  "name": "Durga Prasad",
  "email": "durga@example.com",
  "course": "Computer Science"
}
```

## 🔄 CRUD Operations

The application supports the following operations.

- Create student.
- Read student details.
- Read all students.
- Update student details.
- Delete student.

## ⚛️ React Integration

The React frontend communicates with the Spring Boot backend through REST APIs.

The backend allows requests from the React development server through CORS.

```java
@CrossOrigin(origins = "http://localhost:5173")
```

## ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Configure MySQL

Create the required database in MySQL.

Update your Spring Boot database configuration.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
```

### 3. Run the Backend

Run the Spring Boot application.

The backend will start at:

```text
http://localhost:8080
```

### 4. Run the React Frontend

Open the frontend directory.

```bash
npm install
npm start
```

The React application will run at:

```text
http://localhost:5173
```

## 🧪 Testing

You can test the REST APIs using **Postman**.

You can also test the complete application through the React frontend.

## 📌 Features

- Student registration.
- Student information management.
- CRUD operations.
- RESTful API architecture.
- MySQL database integration.
- React frontend integration.
- CORS configuration.
- Spring Data JPA integration.

## 🎯 Future Enhancements

- Add Spring Security.
- Add JWT authentication.
- Add student search.
- Add pagination.
- Add validation.
- Add exception handling.
- Add Swagger API documentation.
- Deploy backend and frontend online.

## 👨‍💻 Author

**Durga Prasad**

B.Tech Computer Science Engineering

GitHub: **MrPrasad08**

## ⭐ Project

If you find this project useful then consider giving it a ⭐ on GitHub.
