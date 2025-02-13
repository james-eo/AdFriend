import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/database/db.js';
import routes from './src/routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('AdFriend API is running');
});

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
})