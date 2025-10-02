# ✅ Task Manager

A **full-stack task management app** built as part of a practicum project.  
It uses **NestJS + Prisma + PostgreSQL** for the backend and **Next.js + Tailwind CSS** for the frontend.  
The database runs inside a **Docker** container.

---

## 🚀 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-Backend-red?logo=nestjs)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-blue?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-blue?logo=tailwindcss)

---

## 📂 Project Structure

```text
practicum-projects/
├── api/        # NestJS backend (Prisma + CRUD endpoints)
├── web/        # Next.js frontend (UI + Tailwind)
├── infra/      # Docker Compose setup for PostgreSQL
├── docs/       # 📸 Screenshots & documentation assets
│   ├── screenshot-dark.png
│   └── screenshot-light.png
└── README.md   # Project documentation
```
📸 Screenshots

### Dark Mode ![Dark Mode Screenshot](https://raw.githubusercontent.com/Fivkas/task-manager/main/docs/screenshot-dark.png) 

### Light Mode ![Light Mode Screenshot](https://raw.githubusercontent.com/Fivkas/task-manager/main/docs/screenshot-light.png)

## ⚙️ Setup Instructions

Clone the repo and run the following:

```bash
# clone repo
git clone https://github.com/Fivkas/task-manager.git
cd task-manager

# start database
cd infra
docker compose up -d

# backend (NestJS)
cd ../api
npm install
npm run start:dev

# frontend (Next.js)
cd ../web
npm install
npm run dev
```
The backend runs on 👉 http://localhost:4000

The frontend runs on 👉 http://localhost:3000

# 👨‍💻 Author

**Fivos Kapsalis**
🔗 GitHub: [Fivkas](https://github.com/Fivkas)