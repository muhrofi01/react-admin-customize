import * as React from 'react';
import { AppBar, Logout, Menu, UserMenu } from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';


// It's important to pass the ref to allow MUI to manage the keyboard navigation
const ConfigurationMenu = () => {
    return (
        <MenuItem>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>
               Configuration
            </ListItemText>
        </MenuItem>
    );
};

const LoginMenu = () => {
    return (
        <Menu>
            <Menu.Item to="/users" primaryText="Login" leftIcon={<LoginIcon/>} />
        </Menu>
    );
};

const MyUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu />
        <Logout />
        <LoginMenu />
    </UserMenu>
);

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default MyAppBar;