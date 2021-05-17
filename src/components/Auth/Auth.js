import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link, useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import {useState, useEffect} from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {getUser, signin, signup} from '../../services/authenticationService'
import styles from './Auth.module.css'
import {logout} from '../../services/authenticationService'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <a color="inherit" href='https://github.com/dany-mike/stock_portfolio_app_reactjs'>
          Wallet App
        </a>{' '}
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

export default function Auth({authType, isLoggedIn}) {

    const classes = useStyles();
    const history = useHistory()

    const [auth, setAuth] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [resObject, setResObject] = useState({})

    useEffect(() => {
        if(isLoggedIn) {
            logout().then(c => c)
            localStorage.setItem("username", "")
            document.location.reload()
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        // ... keep the values in the form object
        setAuth({...auth, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(authType === "signin") {
            const resSign = await signin(auth)

            if(resSign.status === 200) {
                const resUser = await getUser(resSign.data._id)
                localStorage.setItem("username", resUser.username)
                history.push(`/wallets/${resUser.username}`)
                document.location.reload();
            }

            if(resSign.status !== 200) {
                setResObject(resSign)
            }
        }

        if (authType === "signup") {
            const resRegister = await signup(auth)

            if(resRegister.status === 200) {
                history.push('/signin')
            }

            if(resRegister.status !== 200) {
                setResObject(resRegister)
            }
        }
    }

    // Rendering
    let title
    let link
    let icon
    let text
    let alertError
    let isUsername

    if(authType === "signup") {
        isUsername = 
        <TextField
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        />

        text = "Sign Up"
        title = <Typography component="h1" variant="h5">Sign up</Typography>
        link = <Link variant="body2" to='/signin'>{"Already have an account? Sign In"}</Link>
        icon = <VerifiedUserIcon />
    }

    if(authType === "signin") {
        text = "Sign In"
        title = <Typography component="h1" variant="h5">Sign in</Typography>
        link = <Link variant="body2" to='/signup'>{"Don't have an account? Sign Up"}</Link>
        icon = <LockOutlinedIcon />
    }

    if(resObject.status === 400) {
        alertError = <Alert severity="error" className={styles.marginTopOne}>{resObject.data}</Alert>
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                {icon}
            </Avatar>
            {title}
            {alertError}
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
                {isUsername}
                <TextField
                onChange={handleChange}
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
                onChange={handleChange}
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
                {text}
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
