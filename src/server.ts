// import express from 'express';
import scheduleRoutes from './routes/scheduleRoutes';
import taskRoutes from './routes/taskRoutes';
import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';


const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/api', scheduleRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});