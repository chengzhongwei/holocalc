import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import http from 'http';

dotenv.config();

const app = express();
app.use(bodyParser.json())

// Set port to the value in .env file (8000 by default)
const port = process.env.PORT || 8000;

// Add cors to allow access from port
import cors from 'cors';

app.use(cors({
  origin: `http://localhost:${port}`,
  methods: ['GET', 'POST']
}));

// Connect to MongoDB
const uri = 'mongodb://localhost:27017/holocalc';
mongoose.set('strictQuery', true);
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

connection.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`);
    process.exit();
});

const server = http.createServer(app);
 
// Create APIs
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/weapon', (req, res) => {
    res.send('foo');
})

// Create server listener
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});