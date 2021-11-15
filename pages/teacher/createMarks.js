import { useState, useEffect, useContext } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import Link from "next/link";
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';


export default function Marks({ id , close }) {

    const [ subject_one_mark, setSubjectOneMark] = useState("");
    const [ subject_two_mark, setSubjectTwoMark] = useState("");
    const [ subject_three_mark, setSubjectThreeMark] = useState("");
    const [ subject_four_mark, setSubjectFourMark] = useState("");
    const [ subject_five_mark, setSubjectFiveMark] = useState("");
    const [ subject_six_mark, setSubjectSixMark] = useState("");


    const [subject_one, setSubjectOne] = useState("");
    const [subject_two, setSubjectTwo] = useState("");
    const [subject_three, setSubjectThree] = useState("");
    const [subject_four, setSubjectFour] = useState("");
    const [subject_five, setSubjectFive] = useState("");
    const [subject_six, setSubjectSix] = useState("");


    const [data, setData] = useState({});
    const [student, setStudent] = useState([]);


    const [loading, setLoading] = useState(false);

    // const router = useRouter();
    // const { slug } = router.query;



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table({  subject_one_mark,  subject_two_mark,  subject_three_mark });
        try {
            setLoading(true);
            const { data } = await axios.post(`/api/create-mark/${id}`, {
                 subject_one_mark,
                 subject_two_mark,
                 subject_three_mark,
                 subject_four_mark,
                 subject_five_mark,
                 subject_six_mark,
                subject_one,
                subject_two,
                subject_three,
                subject_four,
                subject_five,
                subject_six,

            });
            console.log("REGISTER RESPONSE", data);
            toast.success("Student Mark Updated.");
            // router.push("/login");

            setLoading(false);
        } catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }
    };


    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >

                    <Typography component="h1" variant="h5">
                        Update Marks
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: "110%" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Subject Name"
                                    onChange={(e) =>  setSubjectOne(e.target.value)}
                                    autoFocus

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Enter Mark"
                                    type="number"
                                    name="lastName"
                                    onChange={(e) =>  setSubjectOneMark(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    onChange={(e) =>  setSubjectTwo(e.target.value)}
                                    label="Subject Name"
                                   
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Enter Mark"
                                    type="number"
                                    name="lastName"
                                    onChange={(e) => setSubjectTwoMark(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Subject Name"
                                    onChange={(e) => setSubjectThree(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Enter Mark"
                                    type="number"
                                    name="lastName"
                                    onChange={(e) => setSubjectThreeMark(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Subject Name"
                                    onChange={(e) => setSubjectFour(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Enter Mark"
                                    type="number"
                                    name="lastName"
                                    onChange={(e) => setSubjectFourMark(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"

                                    fullWidth
                                    id="firstName"
                                    label="Subject Name"
                                    onChange={(e) => setSubjectFive (e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    fullWidth
                                    id="lastName"
                                    label="Enter Mark"
                                    type="number"
                                    onChange={(e) => setSubjectFiveMark(e.target.value)}
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    onChange={(e) => setSubjectSix(e.target.value)}
                                    fullWidth
                                    id="firstName"
                                    label="Subject Name"
                                    autoFocus

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    fullWidth
                                    id="lastName"
                                    label="Enter Mark"
                                    type="number"
                                    name="lastName"
                                    onChange={(e) => setSubjectSixMark(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!subject_one || !subject_one_mark }
                        >
                            {loading ? <CircularProgress color="inherit" />
                                : "Update Marks"}
                        </Button>

                    </Box>
                </Box>

            </Container>

        </div>
    )
}
