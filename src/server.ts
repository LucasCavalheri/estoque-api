
import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env || 3333;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
