const listRouter = require("express").Router();
const {
  getAllList,
  getListId,
  addList,
  deleteListId
} = require("../controller/List");
listRouter.route("/").get(getAllList);
listRouter.route("/:list_id").get(getListId);
listRouter.route("/").post(addList);
listRouter.route("/:list_id").delete(deleteListId);

module.exports = listRouter;