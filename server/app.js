import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// routes
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';

const app = express();
dotenv.config();

// middlewares:
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

// constants:
const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080;

// database connection:
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log('Database Connection is successful.');
      console.log(`Server running on ${PORT}...`);
    })
  )
  .catch((error) => console.log(error.message));
