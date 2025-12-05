const companyData = require('../models/company');

// Contact page controller
exports.getContact = (req, res) => {
  res.render('contact', {
    company: companyData,
    pageTitle: 'Contact Us',
    success: false,
    message: ''
  });
};

// Handle form submission
exports.postContact = (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // In a real application, you would save this to a database
  console.log('New contact message:', { name, email, subject, message });
  
  res.render('contact', {
    company: companyData,
    pageTitle: 'Contact Us',
    success: true,
    message: 'Thank you for your message. We will get back to you soon!'
  });
};
