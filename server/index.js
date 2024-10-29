const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const noteRoutes = require('./routes/NoteRoutes');
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server Running on port ${PORT}'));

