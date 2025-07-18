export const setAuthenticatedUser = (user: {
  username: string;
  password: string;
}) => {
  const stringifiedUser = JSON.stringify(user);
  localStorage.setItem("authenticated-user", stringifiedUser);
};

export const getAuthenticatedUser = () => {
  const stringifiedUser = localStorage.getItem("authenticated-user");

  if (stringifiedUser) {
    return JSON.parse(stringifiedUser);
  }
};
