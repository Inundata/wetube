import express from "express";
import routes from "../routes";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controller/userController";

const userRouter = express.Router();
//express로부터 Router를 가져오기//

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
