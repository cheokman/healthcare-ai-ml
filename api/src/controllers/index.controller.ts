import { Request, Response } from 'express';

import { QueryResult } from 'pg';

import { pool } from '../database';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log(process.env.DB_USER);
    console.log(process.env.DB_HOST);
    console.log(process.env.DB_PASS);
    console.log(process.env.DB_DATABASE_NAME);
    console.log(process.env.DB_PORT);
    const response: QueryResult = await pool.query('SELECT * FROM users');
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return res.json(response.rows);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email } = req.body;
  const response: QueryResult = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email]
  );
  return res.json({
    message: 'User created successfully',
    body: {
      user: {
        name,
        email,
      },
    },
  });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const response: QueryResult = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id]
  );

  return res.status(200).json({
    message: 'Updated user successfully',
    body: {
      user: {
        name,
        email,
      },
    },
  });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query(
    'DELETE FROM users WHERE id = $1',
    [id]
  );
  return res.status(200).json({
    message: 'Deleted user successfully',
  });
};
