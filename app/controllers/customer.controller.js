const Customer = require('../models/customer.model.js')

const create = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: 'Content cannot be empty!'
    })
  }

  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  })

  Customer.create(customer, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the Customer'
      })
    } else {
      res.send(data)
    }
  })
}

const findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
}

module.exports = {
  create,
  findOne
}