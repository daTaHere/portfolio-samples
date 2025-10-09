# Portfolio Samples — React + TypeScript Showcase

> Based off an application built using CRA, React.js, scss, and Bootstrap.
> This project recreats my original work modernized using
> Vite + TypeScript + React
> Portfolio sample demonstrating modular front-end architecture, role-based routing, and mock API integration.

[![Node.js](https://img.shields.io/badge/Node-v22+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19.1.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-v7.1.2-orange)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-v7.3.2-purple)](https://mui.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-v5.90.2-yellow)](https://tanstack.com/query/latest)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-v7.62.0-brightgreen)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-v4.1.9-red)](https://zod.dev/)

---

## 🧭 Overview

This project serves as a **Portfolio code sample** built to highlight:

- Component-driven design using **React + TypeScript**
- Scalable file structure and route organization
- **Role-based access control** via `ProtectedRoute`
- Mock API data with fetch abstraction
- Clean UI with **Material UI (MUI)** and consistent theme usage

> ⚠️ **Note:** This repository is a modernized version of a prior CRA-based project.
> It uses mock data only — no live backend or authentication services are connected.

---

## 🧱 Project Structure

src/
┣ components/ # Shared and page-specific UI components
┣ context/ # Auth provider and hooks
┣ data/ # Mock data for users and posts
┣ hooks/ # React Query & API access hooks
┣ pages/ # Page-level React components
┣ routes/ # Routing setup (public + private routes)
┣ types/ # Shared TypeScript definitions
┣ api.ts # Mock API client abstraction
┗ main.tsx # App entrypoint

---

## ⚙️ Tech Stack

| Layer            | Technology                   |
| ---------------- | ---------------------------- |
| Build            | Vite                         |
| UI               | React + MUI                  |
| Data Layer       | TanStack Query (React Query) |
| Networking       | Fetch API                    |
| Form Handling    | React Hook Form + Zod        |
| Language         | TypeScript                   |
| Routing          | React Router v6              |
| Containerization | Docker + Compose             |
| Package Manager  | npm                          |

---

## 🧰 Prerequisites

- **Node.js v22+**
- **npm 10+**
- (Optional) **Docker & Docker Compose** for containerized development

> All other dependencies are included in `package.json` and `package-lock.json`. No global installation of Vite is required.

---

## 🏃 Local Setup

1. **Clone the repository**

```bash
$ git clone https://github.com/daTaHere/portfolio-samples.git
$ cd portfolio-samples
```

2. **Install dependencies**

```bash
$ npm install
```

3. **Start the development server**

```bash
$ npm run dev
```

## Run application via docker

> via script

```bash
$ ./scripts.sh
Select CMD:
1) Start
2) Shutdown
#? 'Select 1 or 2'
```

> manually

```bash
$ docker compose up -d
```

---

## 📂 Environment Variables

No environment variables or API keys are required for this demo.  
All mock data is sourced locally from `/src/data`.

> This ensures the project runs seamlessly out-of-the-box for recruiter review without additional setup.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).

You are welcome to reference its structure, components, or patterns for learning or inspiration.  
Commercial or production reuse of this codebase is not permitted.

---

## 👨‍💻 Author

**Adam Huynh**  
[🌐 adamhuynh.dev](https://adamhuynh.dev)  
Full Stack Engineer  
React • TypeScript • DevOps • Cloud Architecture

---

## 📫 Contact

I’m always open to discussing new opportunities, collaboration, or technical deep dives.

- 🌐 **Portfolio:** [adamhuynh.dev](https://adamhuynh.dev)
- 💼 **LinkedIn:** [linkedin.com/in/adamhuynhdev](https://www.linkedin.com/in/adam-huynh-1a241a211)
- 📧 **Email:** adam@adamhuynh.dev
