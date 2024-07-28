// Hello;
const endpoints = {
  login: "/login/",
  signup: "/signup/",
  forgetPassword: "/forget-password/",
  changePassword: "/change-password/",
};

function getURLbyEndPoint(endpoint) {
  return "/api/auth" + endpoints[endpoint];
}

export { endpoints, getURLbyEndPoint };
