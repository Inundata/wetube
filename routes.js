//쪼개서 작성하기 위한(가독성) routes.js
//쪼개야 기억하기가 좋음.

// for Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// for Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // 윗 줄과 합치면 /users/1 <- 이런식으로 사람들한테 할당 // : <-로 지정시, express는 이게 순차적으로 변하는 값임을 인식함.
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// for videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; // 이 줄 포함 윗 2줄을 합치면 /videos/1/edit 이런식으로 가는 것임.
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
}; // sets as variables

export default routes;
