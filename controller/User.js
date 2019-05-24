const User = require("../models/User");

exports.getAllUser = (req, res, next) => {
  User.find()
    .then(users => {
      res.send({ users });
    })
    .catch(next);
};

exports.getUserId = (req, res, next) => {
  List.findOne({ _id: req.params.user_id })
    .then(users => {
      if (!users) throw { status: 404, message: "bad request" };
      res.send({ users });
    })
    .catch(next);
};

exports.addUser = (req, res, next) => {
  User.create({name: req.body.name, object: req.body.object })
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