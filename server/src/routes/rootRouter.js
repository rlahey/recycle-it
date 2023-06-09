import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import usersItemRouter from "./api/v1/usersItemRouter.js";
import binRouter from "./api/v1/binRouter.js"

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/bins", binRouter);
rootRouter.use("/api/v1/usersItem", usersItemRouter);

//place your server-side routes here

export default rootRouter;
