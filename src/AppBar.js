import * as React from 'react';
import { AppBar, Logout, UserMenu } from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';


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

const MyUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu />
        <Logout />
    </UserMenu>
);

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default MyAppBar;