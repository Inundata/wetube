const express = require("express"); // require가 하는 것: node module을 어딘가에서 가져오는 것
const app = express(); //app 변수를 선언해서 express를 실행

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
