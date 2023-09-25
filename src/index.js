// import express (after npm install express)
const express = require("express");

const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");



const getAllCustomers = require("./controller/customer-controller");
const getOrdersById = require("./controller/order-controller");

const getCustomerOrdersByTotalCountAndTotalAmounts=require("./controller/customerorder-controller");

const setupAndStartServer = async () => {
  //create express object
  const app = express();

  // parse application/json
  app.use(bodyParser.json());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/customer", getAllCustomers);
  app.get("/order/:id", getOrdersById);
  app.get("/customer-orders",getCustomerOrdersByTotalCountAndTotalAmounts );
  app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
  });
};

setupAndStartServer();
