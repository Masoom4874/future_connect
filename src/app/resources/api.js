const domain = "http://13.60.46.80:3001";

// Hello;
const endpoints = {
  login: "/login/",
  signup: "/signup/",
  forgetPassword: "/forget-password/",
  changePassword: "/change-password/",
};

function getURLbyEndPoint(endpoint) {
  return domain + "/api/auth" + endpoints[endpoint];
}

export { endpoints, getURLbyEndPoint };
