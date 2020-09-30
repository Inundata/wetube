import express from "express";
import { join, login, logout } from "../controller/userController";
import { home, search } from "../controller/videoController";
import routes from "../routes"; // for escape -> ..

const globalRouter = express.Router();

globalRouter.get(routes.home, home); //using controller to minimize the code
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
