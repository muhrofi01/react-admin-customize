import LoginIcon from "@mui/icons-material/Login";
import * as React from "react";
import { AppBar, Logout, Menu, useAuthState, UserMenu } from "react-admin";

// It's important to pass the ref to allow MUI to manage the keyboard navigation

const LoginMenu = () => {
  const { authenticated } = useAuthState();

  if (authenticated) {
    return <Logout sx={{ color: "black" }} />;
  } else {
    return (
      <Menu.Item
        sx={{ color: "black" }}
        to="/login"
        primaryText="Login"
        leftIcon={<LoginIcon />}
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
