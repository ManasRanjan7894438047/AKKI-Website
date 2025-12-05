const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import routes
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const servicesRoutes = require('./routes/services');
const contactRoutes = require('./routes/contact');
const appRoutes = require('./routes/app');

// Use routes
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/services', servicesRoutes);
app.use('/contact', contactRoutes);
app.use('/app', appRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AKKI Website running on http://localhost:${PORT}`);
});
