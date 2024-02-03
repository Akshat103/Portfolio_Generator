const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');
const User = require('./models/User')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'), { 'extensions': ['html', 'css'] }));
app.use(session({ secret: process.env.CLIENTSECRET, resave: false, saveUninitialized: true }));
app.use(express.json());


// Connect to MongoDB
connectDB();

// Routes
const homeRoutes = require('./routes/homeRoutes');
const profileRoutes = require('./routes/profileRoutes');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const errorRoutes = require('./routes/errorRoutes');
const siteRoutes = require('./routes/siteRoutes');

app.use('/', homeRoutes);
app.use('/profile', profileRoutes);
app.use('/auth', authRoutes);
app.use('/form', formRoutes);
app.use('/error', errorRoutes);
app.use('/', siteRoutes);

// Handle undefined routes (404)
app.use((req, res) => {
    res.status(404).render('notfound');
});


app.post("/form", (req, res) => {
    const user = req.body;
    console.log(JSON.stringify(user, null, 2)); // Log the input in JSON form
    res.send('Form data received successfully.'); // Optional: Send a response to the client
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
