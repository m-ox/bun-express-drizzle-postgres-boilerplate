import { drizzle } from 'drizzle-orm/node-postgres';

// export const db = drizzle({
//   user: process.env.POSTGRES_USERNAME,
//   host: 'localhost',
//   database: 'burnedout',
//   password: process.env.POSTGRES_PASSWORD,
//   port: 5432,
// });

// import { drizzle } from 'drizzle-orm/postgres-js';

import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: 'localhost',
  database: 'burnedout',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export const db = drizzle(pool);
