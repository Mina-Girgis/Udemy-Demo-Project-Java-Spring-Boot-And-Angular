# Demo Udemy Project 🎓

A full-stack web application that replicates core Udemy functionality, built as an enablement project for professional development.

## 🚀 Project Overview

This project is a comprehensive learning management system inspired by Udemy, featuring user authentication, course browsing, shopping cart functionality, and advanced filtering capabilities. Built with modern technologies and following industry best practices.

## 🛠️ Tech Stack

### Backend
- **Java Spring Boot** - RESTful API development
- **Spring Security** - Authentication and authorization
- **JPA/Hibernate** - Database ORM
- **H2 Database** - In-memory database for development
- **Maven** - Dependency management

### Frontend
- **Angular 18** - Modern web framework with signals
- **TypeScript** - Type-safe development
- **PrimeNG** - Rich UI component library
- **RxJS** - Reactive programming

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login
- Secure JWT-based authentication
- Protected routes and role-based access
- Session management with Spring Security

### 📚 Course Management
- Browse available courses
- View detailed course information
- Course categorization and organization
- Filter functionality

### 🛒 Shopping Experience
- Add courses to shopping cart
- Cart management (add/remove items)
- Persistent cart state
- Course purchase simulation


## 🏗️ Architecture

```
┌─────────────────┐    HTTP/REST     ┌─────────────────┐
│   Angular 18    │ ◄──────────────► │   Spring Boot   │
│   Frontend      │                  │     Backend     │
└─────────────────┘                  └─────────────────┘
         │                                   │
         │                                   │
         ▼                                   ▼
┌─────────────────┐                 ┌─────────────────┐
│   Local Storage │                 │    Database     │
│   (Auth)        │                 │ (Courses/Users) │
└─────────────────┘                 └─────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Java 11 or higher
- Node.js 18+ and npm
- Git
- IDE (IntelliJ IDEA, VS Code recommended)

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/Mina-Girgis/Udemy-Demo-Project-Java-Spring-Boot-And-Angular.git
cd Udemy-Demo-Project-Java-Spring-Boot-And-Angular/backend

# H2 database is pre-configured for development
# No additional database setup required - it runs in-memory

# Run the Spring Boot application
./mvnw spring-boot:run
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../udemy-demo-frontend

# Install dependencies
npm install

# Start the development server
npm start

# Application will be available at http://localhost:4200
```

### Database Setup
```bash
# H2 Database Console (for development/testing)
# Access at: http://localhost:8080/h2-console
# JDBC URL: jdbc:h2:mem:testdb
# Username: sa
# Password: (leave blank)

# Sample data is automatically loaded on application startup
```

## 🔧 API Endpoints

**Base URL:** `/api/v1`

### Authentication
- `POST /api/v1/user` - User registration
- `POST /api/v1/user/login` - User authentication
- `GET /api/v1/user/{userId}` - Get current user details


### Course Management
- `POST /api/v1/course` - Create new course
- `GET /api/v1/course/{courseId}` - Get course details by ID
- `GET /api/v1/courses` - Get courses by category (with filters)
- `DELETE /api/v1/courses` - Delete all courses
- `GET /api/v1/courses/my-learning` - Get user's enrolled courses
- `GET /api/v1/courses/favourites` - Get user's favorite courses
- `POST /api/v1/courses/{courseId}/favourites` - Add course to favorites

### Cart Management
- `GET /api/v1/carts` - Get user's cart items
- `POST /api/v1/carts/course/{courseId}` - Add course to car
- `DELETE /api/v1/carts/{itemId}` - Remove item from cart
- `DELETE /api/v1/carts/buy` - Buy now


## 🎯 Learning Outcomes

This project was completed as part of professional enablement, focusing on:

### Technical Skills Developed
- **Full-stack development** with modern frameworks
- **RESTful API** design and implementation
- **Database design** and ORM usage
- **Authentication & Security** best practices
- **Responsive web design** principles

### Project Timeline
- **Learning Phase**: 5 days - Technology research and tutorials
- **Development Phase**: 5 days - Implementation and testing
- **Total Duration**: 10 days

### Key Challenges Overcome
- Integrating Spring Security with JWT authentication
- Managing state between Angular components
- Database relationship modeling
- Frontend-backend API integration



## 👨‍💻 Author

**Mina Girgis**
- GitHub: [@Mina-Girgis](https://github.com/Mina-Girgis)
- Project Repository: [Udemy Demo Project](https://github.com/Mina-Girgis/Udemy-Demo-Project-Java-Spring-Boot-And-Angular)

## 🙏 Acknowledgments

- Spring Boot documentation and community
- Angular team for the excellent framework
- PrimeNG team for the comprehensive UI components
- Udemy for inspiration
- H2 Database for seamless development experience
- Open source community for various libraries used
