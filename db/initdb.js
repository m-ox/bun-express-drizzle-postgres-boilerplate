import { users } from '../schemas/users';
import { db } from './pool';

export async function initDatabase() {
    await db.execute(`CREATE TABLE IF NOT EXISTS ${users.name} (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL
    )`);
  }
  
