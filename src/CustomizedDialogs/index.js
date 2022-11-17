import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { useAuthState, useLogin, useNotify } from "react-admin";

const CustomizedDialogs = (props) => {
  const { authenticated } = useAuthState();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = useLogin();
  const notify = useNotify();
  const [open, setOpen] = React.useState(props.open);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = (e) => {
    e.preventDefault();
    // will call authProvider.login({ username, password })
    login({ username, password }).catch(() =>
      notify("Invalid username or password")
    );
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    !authenticated && (
      <div>
        <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
          <DialogTitle>Please Login</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              {/* <TextField id="standard-basic" label="Username" variant="standard" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
              <TextField
                autoFocus
                margin="dense"
                fullWidth
                id="outlined-textarea"
                label="Username"
                placeholder="Input your username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                sx={{ marginY: 2 }}
                fullWidth
                margin="dense"
                id="standard-basic"
                label="Password"
                placeholder="Input your password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="contained" sx={{ marginY: 2 }} type="submit">
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  );
};

export default CustomizedDialogs;
