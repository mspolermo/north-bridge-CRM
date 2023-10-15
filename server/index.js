import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

const DELAY = 1500;
export function simulateDelay(req, res, next) {
  setTimeout(next, DELAY);
}

app.use(cors()); 
app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});