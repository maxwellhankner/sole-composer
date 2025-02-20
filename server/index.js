const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Log environment status
if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode');
}

const passport = require('passport');
require('./src/middleware/googleAuth');
// const passport = require('./src/middleware/googleAuth');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;
const app = express();

// for those extra large requests
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000 * 1000, // 1000 day
    name: 'session',
    keys: ['key1', 'key2'],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
} else {
  // In development, allow CORS for Vite's dev server
  app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
}

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Server ready on port:', port);
});

// Routes
const outlineRoutes = require('./src/routes/outlines');
const configRoutes = require('./src/routes/configs');
const featuredRoutes = require('./src/routes/featured');
const assetRoutes = require('./src/routes/assets');
const authRoutes = require('./src/routes/auth');

// Use routes
app.use('/api/outlines', outlineRoutes);
app.use('/api/configs', configRoutes);
app.use('/api/featured', featuredRoutes);
app.use('/api/assets', assetRoutes);
app.use('/auth', authRoutes);

// Authentication
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

const redirectUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.URL
    : `http://localhost:3000/`;

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: redirectUrl,
    failureRedirect: '/auth/login/failed',
  })
);

// Handle client-side routing
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
} else {
  // In development, only handle API routes, let Vite handle the rest
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/') || req.path.startsWith('/auth/')) {
      next();
    } else {
      res.redirect('http://localhost:5173' + req.path);
    }
  });
}

app.listen(port);
