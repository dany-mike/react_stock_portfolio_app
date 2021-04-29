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
import {signin, signup} from '../../services/authenticationService'
import styles from './Auth.module.css'

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

export default function Auth({authType}) {
    const classes = useStyles();
    const history = useHistory()

    const [auth, setAuth] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [res, setRes] = useState(false)
    const [resObject, setResObject] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        // ... keep the values in the form object
        setAuth({...auth, [name]: value })
    };

    useEffect(() => {
        if(res) {
            (async () => {
                setResObject(await signin(auth))

                if(resObject.status === 200) {
                    history.push(`/wallets/${auth.username}`)
                }

                if(resObject.status !== 200) {
                    setRes(false)
                }
            })()
        }
    }, [res, auth, resObject, history])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(authType === "signin") {
            setRes(true)
        }
        
        if (authType === "signup") {
            setRes(await signup(auth))
        }
    }

    // Rendering
    let title
    let link
    let icon
    let text
    let alertError

    if(authType === "signup") {
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
