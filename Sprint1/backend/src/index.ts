// Import required modules
import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users'
import authRoutes from './routes/auth'

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
// app.use(cors()); // Enable CORS

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// MongoDB connection

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Example route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API is running smoothly!' });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app for testing
export default app;
