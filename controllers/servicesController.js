const services = require('../models/services');
const companyData = require('../models/company');

// Services page controller
exports.getServices = (req, res) => {
  res.render('services', {
    services: services,
    company: companyData,
    pageTitle: 'Services'
  });
};

// Service detail controller
exports.getServiceDetail = (req, res) => {
  const serviceId = req.params.id;
  const service = services.find(s => s.id === parseInt(serviceId));
  
  if (!service) {
    return res.status(404).render('404');
  }
  
  res.render('service-detail', {
    service: service,
    company: companyData,
    pageTitle: service.name
  });
};
