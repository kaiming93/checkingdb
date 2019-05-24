const mongoose = require("mongoose");
const { List, User } = require("../models");
const {
  createList, createUser
} = require("../utils");

const seedDB = ({listData, userData}) => {
  return mongoose.connection
    .dropDatabase()
    .then(() => {
      return List.insertMany(
          createList(listData)
        )
    }).then(() => {
      return User.insertMany(
          createUser(userData)
        )
    });
};

module.exports = seedDB;