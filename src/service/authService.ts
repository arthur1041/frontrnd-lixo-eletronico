const doLogIn = (username: string) => {
  localStorage.setItem("username", username);
  localStorage.setItem("isLoggedIn", "true");
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};

const logOut = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("isLoggedIn");
};

const getAuthenticatedUsername = () => {
  return localStorage.getItem("username");
};

export default {
  doLogIn,
  isLoggedIn,
  logOut,
  getAuthenticatedUsername
};
