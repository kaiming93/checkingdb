const userRouter = require("express").Router();
const {
  getAllUser,
  getUserId,
  addUser,
  deleteUserId
} = require("../controller/User");
userRouter.route("/").get(getAllUser);
userRouter.route("/:user_id").get(getUserId);
userRouter.route("/").post(addUser);
userRouter.route("/:user_id").delete(deleteUserId);

module.exports = userRouter;