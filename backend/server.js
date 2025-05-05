const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

dotenv.config();

const app = express();

// Глобальная настройка CORS
const corsOptions = {
  origin: [
    'http://localhost:8000',
    'http://localhost:3000',
    'https://nodevue.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// Настройка Multer
const storage = multer.diskStorage({
  destination: './Uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Подключение к БД
const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000,
  ssl: { rejectUnauthorized: false },
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from(process.env.MYSQL_PASSWORD + '\0')
  }
});

// Middleware аутентификации
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// API Routes

// Users
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Invalid input' });

    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length) return res.status(400).json({ error: 'Email exists' });

    await db.query('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', 
      [email, password, 'user']);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (!users.length) return res.status(401).json({ error: 'User not found' });
    const user = users[0];
    
    if (password !== user.password) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Students
app.get('/api/students', authenticateToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const [students] = await db.query('SELECT * FROM students LIMIT ? OFFSET ?', [limit, offset]);
    const [[{ total }]] = await db.query('SELECT COUNT(*) as total FROM students');
    
    res.json({ students, total, page, limit });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

app.post('/api/students', authenticateToken, upload.single('photo'), async (req, res) => {
  try {
    const { first_name, last_name, email, phone, date_of_birth, address, city, country } = req.body;
    const photo_file_name = req.file ? `/uploads/${req.file.filename}` : '/uploads/placeholder.jpg';

    await db.query(
      'INSERT INTO students (first_name, last_name, email, phone, date_of_birth, address, city, country, photo_file_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone, date_of_birth, address, city, country, photo_file_name]
    );
    res.status(201).json({ message: 'Student added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

app.put('/api/students/:id', authenticateToken, upload.single('photo'), async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone, date_of_birth, address, city, country } = req.body;
    const photo_file_name = req.file ? `/uploads/${req.file.filename}` : req.body.photo_file_name;

    await db.query(
      'UPDATE students SET first_name = ?, last_name = ?, email = ?, phone = ?, date_of_birth = ?, address = ?, city = ?, country = ?, photo_file_name = ? WHERE id = ?',
      [first_name, last_name, email, phone, date_of_birth, address, city, country, photo_file_name, id]
    );
    res.json({ message: 'Student updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update student' });
  }
});

app.delete('/api/students/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM students WHERE id = ?', [id]);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

// Teachers
app.get('/api/teachers', authenticateToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const [teachers] = await db.query('SELECT * FROM teachers LIMIT ? OFFSET ?', [limit, offset]);
    const [[{ total }]] = await db.query('SELECT COUNT(*) as total FROM teachers');
    
    res.json({ teachers, total, page, limit });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teachers' });
  }
});

app.post('/api/teachers', authenticateToken, upload.single('photo'), async (req, res) => {
  try {
    const { first_name, last_name, email, phone, hire_date, department, office_location, qualification } = req.body;
    const photo_file_name = req.file ? `/uploads/${req.file.filename}` : '/uploads/placeholder.jpg';

    await db.query(
      'INSERT INTO teachers (first_name, last_name, email, phone, hire_date, department, office_location, qualification, photo_file_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone, hire_date, department, office_location, qualification, photo_file_name]
    );
    res.status(201).json({ message: 'Teacher added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add teacher' });
  }
});

app.put('/api/teachers/:id', authenticateToken, upload.single('photo'), async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone, hire_date, department, office_location, qualification } = req.body;
    const photo_file_name = req.file ? `/uploads/${req.file.filename}` : req.body.photo_file_name;

    await db.query(
      'UPDATE teachers SET first_name = ?, last_name = ?, email = ?, phone = ?, hire_date = ?, department = ?, office_location = ?, qualification = ?, photo_file_name = ? WHERE id = ?',
      [first_name, last_name, email, phone, hire_date, department, office_location, qualification, photo_file_name, id]
    );
    res.json({ message: 'Teacher updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update teacher' });
  }
});

app.delete('/api/teachers/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM teachers WHERE id = ?', [id]);
    res.json({ message: 'Teacher deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete teacher' });
  }
});

// Static Files
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// SPA Fallback (MUST BE LAST)
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Database connection check and server start
db.getConnection()
  .then(conn => {
    console.log('✅ Database connected');
    conn.release();
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  });
