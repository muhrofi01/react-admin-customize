const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    if (username == "rofi" && password == "spasi1kali") {
      return Promise.resolve();
    } else {
      return Promise.reject("username & password salah");
    }
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
