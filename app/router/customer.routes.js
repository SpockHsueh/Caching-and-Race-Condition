module.exports = (app) => {
  const customers = require('../controllers/customer.controller.js');
  // Create a new Customer
  app.post('/customers', customers.create);

  // Retrieve a single Customer with customerId
  app.get('/customers/:customerId', customers.findOne);
};
