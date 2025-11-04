# Node.js + Express + PostgreSQL CRUD API Project 4

This is a clean starter aligned with the tutorial **“CRUD REST API with Node.js, Express, and PostgreSQL.”**  
It includes:
- Express server with `/api/users` routes  
- PostgreSQL connection via `pg` and `.env` variables (no secrets in code)  
- `.gitignore` already ignoring `node_modules` and `.env`  
- SQL schema + seed scripts  
- Extra: middleware (CORS, JSON body parsing, request logging), 404 & error handlers  

---

## Prerequisites
- **Node.js** ≥ 18  
- **PostgreSQL** (local or hosted). For hosted providers like **Neon**, you can use `DATABASE_URL`.

---

## Setup
```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill values
cp .env.example .env
# Edit .env to match your database credentials.
# You can use either DATABASE_URL or granular DB_* variables.

# 3. Create DB objects
# Update psql flags (-U, -h, -d) to match your environment
psql -U postgres -d cmp464_db -f sql/schema.sql
psql -U postgres -d cmp464_db -f sql/seed.sql

# 4. Run the server
npm run dev   # with nodemon
# or
npm start
```

---

## API Endpoints

**Base path:** `/api/users`

| Method | Path   | Body JSON                 | Description |
|:------:|:------:|:--------------------------|:-------------|
| GET | `/` | — | List all users |
| GET | `/:id` | — | Get user by ID |
| POST | `/` | `{ "name": "John", "email": "john@example.com" }` | Create a new user |
| PUT | `/:id` | `{ "name": "Jane", "email": "jane@example.com" }` | Update existing user |
| DELETE | `/:id` | — | Delete user by ID |

### Sample cURL
```bash
curl http://localhost:3000/api/users
curl -X POST http://localhost:3000/api/users   -H "Content-Type: application/json"   -d '{"name":"Ada Lovelace","email":"ada@calc.io"}'
```

---

## Keeping credentials secret with `.env`

- All PostgreSQL credentials are stored securely in `.env`.  
- `.gitignore` excludes `.env`, so your secrets never go to GitHub.  
- Use either:
  ```bash
  DATABASE_URL=postgres://user:pass@host:5432/dbname
  DB_SSL=true
  ```
  **or**
  ```bash
  DB_HOST=localhost
  DB_USER=postgres
  DB_PASSWORD=your_password
  DB_DATABASE=cmp464_db
  DB_PORT=5432
  DB_SSL=false
  ```


> “How can I keep my DB credentials secret with `.env` and test the connection?”  
> Run your server to confirm `.env` is working.

---

## GitHub Submission
```bash
git init
git add .
git commit -m "CMP464 Project 4: Node + Express + PostgreSQL CRUD API"
git branch -M main
git remote add origin https://github.com/<your-username>/Project-4-CRUD-REST-API-with-Node.js-Express-and-PostgreSQL.git
git push -u origin main
```

---

## Notes & Troubleshooting

- If you accidentally committed `.env`, fix it:
  ```bash
  git rm --cached .env
  echo ".env" >> .gitignore
  git commit -m "Remove .env from Git tracking"
  git push
  ```

- **PostgreSQL connection errors:**  
  If you see SSL or authentication errors (like “no pg_hba.conf entry”):  
  → Try setting `DB_SSL=true` for managed hosts like Neon.  

- **Extra credit ideas:**
  - Add input validation (e.g., `express-validator`)  
  - Add Swagger or Postman documentation  
  - Add Docker Compose for PostgreSQL  
  - Write Jest tests for endpoints  

---

 **Project Summary:**  
A full-stack REST API that performs CRUD operations using Node.js, Express, and PostgreSQL with secure environment variable management via `.env` and clean, modular code for scalability and maintainability.
