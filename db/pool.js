import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'burnedout',
  password: '12345burnedout54321',
  port: 5432,
});

const test = await pool.query('CREATE SCHEMA IF NOT EXISTS burnedout');
console.log('created burnedout schema')

export const db = drizzle({ client: pool });
