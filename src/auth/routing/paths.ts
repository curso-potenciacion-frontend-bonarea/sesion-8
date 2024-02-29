export const authPaths = {
  root: "access",
  login: "login",
  register: "register",
};

export const authFullPaths = {
  login: "/" + authPaths.root + "/" + authPaths.login,
  register: "/" + authPaths.root + "/" + authPaths.register,
};
