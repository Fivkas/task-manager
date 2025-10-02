# 📝 Task Manager App

A full-stack task management application built with **NestJS + Prisma + PostgreSQL** on the backend and **Next.js + Tailwind CSS** on the frontend.

---

## ✨ Features

- ➕ Add new tasks  
- 📋 View all tasks  
- ✏️ Update task title / status  
- ✅ Toggle completion with a single click  
- ❌ Delete tasks  
- 🌙/☀️ Dark/Light mode toggle in the frontend  

---

## 🛠️ Tech Stack

### Backend
- [NestJS](https://nestjs.com/)  
- [Prisma ORM](https://www.prisma.io/)  
- [PostgreSQL](https://www.postgresql.org/) (with PostGIS, via Docker)  

### Frontend
- [Next.js](https://nextjs.org/)  
- [React](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  

### DevOps
- [Docker](https://www.docker.com/) (for database)  
- Git & GitHub  

---

## 🚀 Getting Started

### 1. Database
```bash
cd infra
docker compose up -d

### 2. Backend

cd api
npm install
npm run start:dev

👉 Backend runs on http://localhost:4000

### 3. Frontend

cd web
npm install
npm run dev

👉 Frontend runs on http://localhost:3000

📂 Project Structure

practicum-projects/
├── api/         # NestJS backend (Prisma + CRUD endpoints)
├── web/         # Next.js frontend (UI + Tailwind)
├── infra/       # Docker Compose setup for PostgreSQL
├── docs/        # 📸 Screenshots & documentation assets
│   ├── screenshot-dark.png
│   └── screenshot-light.png
└── README.md    # Project documentation (links to docs/)

🔗 API Endpoints

Tasks

* GET /tasks → Fetch all tasks

* GET /tasks/:id → Fetch a single task

* POST /tasks → Create a new task

* PUT /tasks/:id → Update a task

* POST /tasks/:id/toggle → Toggle completed status

* DELETE /tasks/:id → Delete a task


## Screenshots

![Dark Mode Screenshot](https://raw.githubusercontent.com/Fivkas/task-manager/main/docs/screenshot-dark.png)
![Light Mode Screenshot](https://raw.githubusercontent.com/Fivkas/task-manager/main/docs/screenshot-light.png)

## 👨‍💻 Author

- Name: **Fivos Kapsalis**  
- GitHub: [Fivkas](https://github.com/Fivkas)