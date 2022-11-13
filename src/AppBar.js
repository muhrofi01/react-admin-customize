import LoginIcon from "@mui/icons-material/Login";
import * as React from "react";
import { AppBar, Logout, Menu, UserMenu } from "react-admin";

const checkLogin = () => {
  return localStorage.getItem("username") ? true : false;
};

console.log(checkLogin());

// It's important to pass the ref to allow MUI to manage the keyboard navigation
const LoginMenu = () => {
  if (checkLogin() == true) {
    return <Logout sx={{ color: "black" }} />;
  } else {
    return (
      <Menu.Item
        sx={{ color: "black" }}
        to="/login"
        primaryText="Login"
        leftIcon={<LoginIcon />}
        disabled={checkLogin()}
      />
    );
  }
};

const MyUserMenu = (props) => (
  <UserMenu {...props}>
    <LoginMenu />
  </UserMenu>
);

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default MyAppBar;
