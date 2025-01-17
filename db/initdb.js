import { db } from './pool';

export async function initDatabase() {

    try {
        await db.execute(`CREATE SCHEMA IF NOT EXISTS burnedout`);
        console.log('Schema created.');
    } catch (error) {
        console.error('Error creating burnedout schema:', error);
        
    }

    console.log('Creating table...');
    try {
        await db.execute(`
            CREATE TABLE IF NOT EXISTS burnedout.users (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL
            )
        `);
        console.log('Table created.');
    } catch (error) {
        console.error('Error creating user table:', error)
    }
}
