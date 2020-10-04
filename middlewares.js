import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; // WxeTube를 siteName으로 저장해서 내보냄(res.locals의 역할)
  res.locals.routes = routes; // routes.js파일을 routes으로 저장해서 내보냄
  next(); // 이게 필요한 이유는 app.js에 app.use(localsMiddleware)를 넣고, 그 밑의 router들에 접근해야하므로 다음 middleware로 넘겨주는 next를 꼭 써야하는 것임.
};
