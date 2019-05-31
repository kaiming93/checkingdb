const User = require("../models/User");

exports.getAllUser = (req, res, next) => {
  User.find()
    .then(users => {
      res.send({ users });
    })
    .catch(next);
};

exports.getUserId = (req, res, next) => {
  User.findOne({ _id: req.params.user_id })
    .then(users => {
      if (!users) throw { status: 404, message: "bad request" };
      res.send({ users });
    })
    .catch(next);
};

exports.addUser = (req, res, next) => {
  User.create({object: req.body.object, firstName: req.body.firstName,lastName: req.body.lastName,  phone: req.body.phone, email: req.body.email })
  .then(user => {
    res.status(201).send({ user });
  })
  .catch(next);
}

exports.deleteUserId = (req, res, next) => {
    User.remove({ _id: req.params.user_id })
      .then(users => {
        res.send({ users });
      })
      .catch(next);
  };