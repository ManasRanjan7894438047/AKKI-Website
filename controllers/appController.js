const companyData = require('../models/company');

// App page controller
exports.getApp = (req, res) => {
  res.render('app', {
    company: companyData,
    pageTitle: 'AKKI Solutions App'
  });
};
