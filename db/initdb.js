import { db } from './pool';

export async function initDatabase(db) {

    await db.execute('CREATE SCHEMA IF NOT EXISTS boilerplate');

    await db.execute(`
        CREATE TABLE IF NOT EXISTS boilerplate.users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL
        );
    `);
    
    console.log('Database initialized with schema and tables.');
}
  