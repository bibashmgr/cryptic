import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// routes
import welcomeRoutes from './routes/index.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import postsRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// middlewares:
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(helmet());

app.use('/', welcomeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);

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
