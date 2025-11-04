Node.js + Express + PostgreSQL CRUD API (Project 4)
This project follows the tutorial 'CRUD REST API with Node.js, Express, and PostgreSQL'. It provides a basic REST API to manage users using Node.js, Express, and PostgreSQL. The app uses environment variables for security and supports both local and cloud databases.
1. Prerequisites
• Node.js version 18 or higher
• PostgreSQL (local or Neon cloud)
2. Setup Steps
1. Install dependencies:
   npm install

2. Copy the environment template and edit it:
   cp .env.example .env

3. Create the database and tables:
   psql -U postgres -d cmp464_db -f sql/schema.sql
   psql -U postgres -d cmp464_db -f sql/seed.sql

4. Run the server:
   npm run dev  # or npm start


3. API Endpoints
Base Path: /api/users

GET /        → List all users
GET /:id     → Get user by ID
POST /       → Add a new user
PUT /:id     → Update user by ID
DELETE /:id  → Delete user by ID
4. Environment Variables (.env)
Database credentials should be stored in a .env file for security:

Example:
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_DATABASE=cmp464_db
DB_PORT=5432
DB_SSL=false

.gitignore excludes .env to keep secrets private.
5. GitHub Submission
git init
git add .
git commit -m 'CMP464 Project 4: Node + Express + PostgreSQL CRUD API'
git branch -M main
git remote add origin https://github.com/<your-username>/Project-4-CRUD-REST-API-with-Node.js-Express-and-PostgreSQL.git
git push -u origin main
6. Troubleshooting
• If .env was committed accidentally:
  git rm --cached .env
  echo '.env' >> .gitignore
  git commit -m 'Remove .env from tracking'
  git push

• For SSL errors on Neon: set DB_SSL=true
• Optional improvements: add validation, Docker, Swagger, or Jest tests
Summary:
This project builds a CRUD REST API with Node.js, Express, and PostgreSQL, demonstrating environment variable usage, database connectivity, and secure configuration.

