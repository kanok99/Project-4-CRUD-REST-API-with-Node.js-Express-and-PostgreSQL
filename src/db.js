require('dotenv').config();
const { Pool } = require('pg');

const useSsl = (process.env.DB_SSL || '').toLowerCase() === 'true';

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: useSsl ? { rejectUnauthorized: false } : false,
    })
  : new Pool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      database: process.env.DB_DATABASE || 'cmp464_db',
      password: process.env.DB_PASSWORD || '',
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
      ssl: useSsl ? { rejectUnauthorized: false } : false,
    });

module.exports = { pool };
