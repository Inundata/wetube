import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
//default로 export하지 않았기 때문에 이와 같이 해야함//

const app = express();
//app을 express로 정의하고//

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
//user에 접근시 userRouter 전체가 사용됨(.use를 붙임으로써)//

// 누군가 내 파일을 불러오면 default로 app object(위에 app.로 정의한 모든 것)
// 를 주겠다.
export default app;
