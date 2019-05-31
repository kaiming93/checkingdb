const mongoose = require("mongoose");
const {  User } = require("../models");
const {
  createUser
} = require("../utils");

const seedDB = ({userData }) => {
  return mongoose.connection
    .dropDatabase()
    .then(() => {
      return User.insertMany(
          createUser(userData)
        )
    })
};

module.exports = seedDB;