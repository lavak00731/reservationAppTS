import express from 'express';
import getDB from './repositories/DBConnection.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
getDB();
app.use(express.json());
app.use('/api/users', userRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});