const companyData = require('../models/company');

// Home page controller
exports.getHome = (req, res) => {
  res.render('index', {
    company: companyData,
    pageTitle: 'Home'
  });
};
