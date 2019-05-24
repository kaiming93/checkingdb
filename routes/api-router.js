const apiRouter = require("express").Router();
const listRouter = require("./list-router");
const userRouter = require("./user-router");

apiRouter.get("/", (req, res) => {
  res.send({ Message: "API" });
});

apiRouter.use("/lists", listRouter);
apiRouter.use("/users", userRouter);

module.exports = apiRouter;