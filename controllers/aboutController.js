const companyData = require('../models/company');

// About page controller
exports.getAbout = (req, res) => {
  res.render('about', {
    company: companyData,
    pageTitle: 'About Us'
  });
};
