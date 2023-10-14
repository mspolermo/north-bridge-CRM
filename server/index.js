import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 4000;
const DELAY = 1500;

app.use(cors()); 
app.use(bodyParser.json());

const dbFilePath = 'db.json';

export function simulateDelay(req, res, next) {
  setTimeout(next, DELAY);
}

// Эндпойнт для получения аккаунтов
app.get('/users', simulateDelay, (req, res) => {
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const dbData = JSON.parse(data);
      const accounts = dbData.users;
      res.json(accounts);
    }
  });
});

// Эндпойнт для получения авторизации
app.post('/login', simulateDelay, (req, res) => {
  const { username, password } = req.body;

  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const dbData = JSON.parse(data);
      const users = dbData.users;
      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        // Пользователь авторизован
        res.json({ authorized: true, user });
      } else {
        // Неверное имя пользователя или пароль
        res.status(401).json({ authorized: false, error: 'Invalid username or password' });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});