const List = require("../models/List");

exports.getAllList = (req, res, next) => {
  List.find()
    .then(lists => {
      res.send({ lists });
    })
    .catch(next);
};

exports.getListId = (req, res, next) => {
  List.findOne({ _id: req.params.list_id })
    .then(lists => {
      if (!lists) throw { status: 404, message: "bad request" };
      res.send({ lists });
    })
    .catch(next);
};

exports.addList = (req, res, next) => {
  List.create({name: req.body.name })
  .then(list => {
    res.status(201).send({ list });
  })
  .catch(next);
}

exports.deleteListId = (req, res, next) => {
    List.remove({ _id: req.params.list_id })
      .then(lists => {
        res.send({ lists });
      })
      .catch(next);
  };