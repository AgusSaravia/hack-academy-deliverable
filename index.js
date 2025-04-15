import express from "express";
import process from "node:process"
import { configDotenv } from "dotenv";
configDotenv()
import userRoutes from './routes/user.route.js';
import articleRoutes from './routes/article.route.js';

import {sequelize}  from './config/config.js';
import './models/index.js';

sequelize.sync({ alter: true }).then(() => {
  console.log('DB synchronized');
  app.listen(process.env.BACKEND_PORT, () => {
    console.log('Server running on port', process.env.BACKEND_PORT);
  });
}).catch((err) => {
  console.error('DB sync error:', err);
});

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);


app.listen(process.env.BACKEND_PORT)