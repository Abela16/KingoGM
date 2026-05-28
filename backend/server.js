import app from "./src/app.js";
import {connectDB} from "./src/config/db.js";
import dotenv from "dotenv";
import userRoutes from './src/routes/userRoutes.js'

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`KingoGM backend server is running on port ${port}`);
});

