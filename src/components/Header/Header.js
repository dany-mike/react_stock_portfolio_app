import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./Header.module.css";
import { logout } from "../../services/authenticationService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const logoutFunc = async () => {
  await logout();
  document.location.reload();
};

export default function Header({ isLoggedIn }) {
  const classes = useStyles();
  let signsButtons;
  let logout;

  if (isLoggedIn) {
    logout = (
      <>
        <Link
          variant="body2"
          to={`/favorites/${localStorage.getItem("username")}`}
          className={styles.menu}
        >
          <Button color="inherit">Favorites</Button>
        </Link>
        <Link
          variant="body2"
          to="/signin"
          className={styles.menu}
          onClick={logoutFunc}
        >
          <Button color="inherit">Logout</Button>
        </Link>
      </>
    );
  }
  if(!isLoggedIn) {
    signsButtons = (
      <>
        <Link variant="body2" to="/signin" className={styles.menu}>
          <Button color="inherit">Sign In</Button>
        </Link>
        <Link variant="body2" to="/signup" className={styles.menu}>
          <Button color="inherit">Sign Up</Button>
        </Link>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Wallet App
          </Typography>
          {signsButtons}
          {logout}
        </Toolbar>
      </AppBar>
    </div>
  );
}
