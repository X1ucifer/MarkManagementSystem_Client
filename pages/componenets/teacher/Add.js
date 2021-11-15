import {
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import { makeStyles, withStyles, ThemeProvider } from '@mui/styles';
import Box from '@mui/material/Box';
import Link from "next/link";
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { styled } from '@mui/system';


//   import MuiAlert from "@mui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    fab: {
        // position: "absolute",
        // bottom: 25,
        // right: 20,
        margin: "auto auto",
        width: "194px",
        marginTop: "75px",
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));


const f = styled('Fab')({
    position: "fixed",
    bottom: 25,
    right: 20,
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});


    const [loading, setLoading] = useState(false);

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table({ name, email, password });
        try {
            setLoading(true);
            const { data } = await axios.post(`/api/create-student`, {
                name,
                email,
                password,
            });
            console.log("REGISTER RESPONSE", data);
            toast.dark("Student Created Successfully.");
            // router.push("/login");

            setLoading(false);
        } catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenAlert(false);
    };
    return (
        <>
            <Tooltip title="Create Student" aria-label="add" onClick={() => setOpen(true)}>
                <div style={{
                    margin: "auto auto",
                    width: "194px",
                    marginTop: "75px",
                }}>
                    <Button color="primary" variant="contained" startIcon={<AddIcon />} >
                        Create Students
                    </Button>
                </div>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 13 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Student Name"
                                    onChange={(e) => setName(e.target.value)}
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {loading ? <CircularProgress color="inherit" />
                                : "Create Student"}
                        </Button>

                    </Box>

                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                </Container>

            </Modal>


            <Snackbar
                open={openAlert}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Add;