const { pool } = require('./db');

const isValidEmail = (email) => /.+@.+\..+/.test(email);

const getUsers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT id, name, email FROM users ORDER BY id ASC;');
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const result = await pool.query('SELECT id, name, email FROM users WHERE id = $1;', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
    if (!isValidEmail(email)) return res.status(400).json({ error: 'invalid email' });
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email;',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err && err.code === '23505') {
      return res.status(409).json({ error: 'email already exists' });
    }
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
    if (!isValidEmail(email)) return res.status(400).json({ error: 'invalid email' });
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email;',
      [name, email, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(result.rows[0]);
  } catch (err) {
    if (err && err.code === '23505') {
      return res.status(409).json({ error: 'email already exists' });
    }
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const result = await pool.query('DELETE FROM users WHERE id = $1;', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
