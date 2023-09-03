import express from 'express';
import 'dotenv/config';
import { getUser } from './database/user';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => { // Make the route handler async
  try {
    let result = await getUser(); // Wait for the getUser function to complete
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
