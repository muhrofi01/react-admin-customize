import * as React from 'react';
import { useLogin, useNotify } from 'react-admin';
import PropTypes from 'prop-types';
import { Box, Dialog, DialogTitle, DialogContent, IconButton, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const CustomizedDialogs = (props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const login = useLogin();
    const notify = useNotify();
    const [open, setOpen] = React.useState(props.open);

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ username, password })
        login({ username, password }).catch(() =>
            notify('Invalid username or password')
        );
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Login
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField id="standard-basic" label="Username" variant="standard" 
                            name="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                    </Box>
                    <Box>
                        <TextField id="standard-basic" label="Password" variant="standard" 
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </Box>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </DialogContent>
        </BootstrapDialog>
        </div>
    );
}

const Home = (props) => {
    return (
        <>
            <h1>
                This is a home page
            </h1>
            <CustomizedDialogs open={props.openLogin} />
        </>
    );
}

export default Home;