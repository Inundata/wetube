import express from "express";

export const userRouter = express.Router();
//express로부터 Router를 가져오기//

userRouter.get("/", (req, res) => res.send("user index")); //여기서 /이 app.js에 지정한 /user의 가장 기본 경로로 설정됨//
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
