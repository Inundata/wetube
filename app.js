// code related to application
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();
//app을 express로 정의하고//

app.use(helmet()); // protect the application
app.set("view engine", "pug");
app.use(cookieParser()); // checking the users
app.use(bodyParser.json()); // check the info which sends by users
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // logging the event of application
app.use(localsMiddleware); // making local variable middleware(to use as global variables)

app.use(routes.home, globalRouter); //the host Router
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
