import { Pool } from 'pg';

// export const pool = new Pool({
//   user: 'postgres',
//   password: 'admin',
//   host: 'localhost',
//   database: 'firstapi',
//   port: 5432,
// });

const port: number = parseInt(<string>process.env.PORT, 10) || 5432;

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE_NAME,
  port,
});
