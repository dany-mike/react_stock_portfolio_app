import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/dany-mike/stock_portfolio_app_reactjs">
          Wallet App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Auth({authType}) {
    const classes = useStyles();

    let title;
    let isUsername
    let link

    if(authType === "signup") {
        title = <Typography component="h1" variant="h5">Sign up</Typography>
        isUsername = <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Choose a username"
        name="username"
        autoComplete="username"
        autoFocus
        />
        link = <Link variant="body2" to='/signin'>{"Already have an account? Sign In"}</Link>
    }

    if(authType === "signin") {
        title = <Typography component="h1" variant="h5">Sign in</Typography>
        link = <Link variant="body2" to='/signup'>{"Don't have an account? Sign Up"}</Link>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            {title}
            <form className={classes.form} noValidate>
                {isUsername}
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
                <Grid item>
                    {link}
                </Grid>
            </form>
            </div>
            <Box mt={8}>
            <Copyright />
            </Box>
        </Container>
    )
}
