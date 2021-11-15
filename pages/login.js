import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from "next/link";
import { Context } from "./context";
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/router";




const theme = createTheme();

export default function SignIn() {

    const [email, setEmail] = useState("akhil1@gmail.com");
    const [password, setPassword] = useState("zebronics3");
    const [loading, setLoading] = useState(false);



    const {
        state: { user },
        dispatch,
    } = useContext(Context);

    useEffect(() => {
        if (user !== null) router.push("/");
    }, [user]);

    // router
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password });
        try {
            setLoading(true);
            const { data } = await axios.post( `/api/login`, {
                email,
                password,
            });

            console.log("LOGIN RESPONSE", data);

            dispatch({
                type: "LOGIN",
                payload: data,
            });
            // save in local storage
            window.localStorage.setItem("user", JSON.stringify(data));
            // redirect

            // router.push("/teacher")
            window.location.href = "/teacher";

            setLoading(false);

        } catch (err) {
            toast.dark(err.response.data);
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        STAFF LOGIN
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {loading ? <CircularProgress color="inherit" />
                                : "Login"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <a href="#" variant="body2">
                                    Forgot password?
                                </a>
                            </Grid>
                            <Grid item>
                                <Link href="/register">
                                    <a>
                                        {"Don't have an account? Sign Up"}
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}