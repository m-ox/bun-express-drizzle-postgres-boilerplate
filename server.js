import dotenv from 'dotenv';
import cors from 'cors'
import { db } from './db/pool';
import { initDatabase } from './db/initdb';
import express from "express";
import { serve } from 'bun';

dotenv.config();

const app = express();

if (!process.env.DB_URL) {
  console.error('ERROR: Invalid DB_URL. Please check your .env file.');
  process.exit(1);
}

app.use(cors());

initDatabase()
  .then(() => console.log('Database initialized.'))
  .catch((error) => console.error('Error initializing database:', error))
  .finally(() => db.$client.end());

serve({
  port: process.env.PORT || 3000,
  fetch(request) {
      return new Response(`Server running on port ${process.env.PORT}`);
  },
});