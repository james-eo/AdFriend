import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AdFriend API is running');
});

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
})