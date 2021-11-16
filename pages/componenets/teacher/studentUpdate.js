import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { toast } from "react-toastify";
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import { makeStyles, withStyles, ThemeProvider } from '@mui/styles';
import Link from 'next/link'
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Marks from "../../../pages/teacher/createMarks"

const useStyles = makeStyles((theme) => ({
    stud: {
        display: "flex",
        alignItems: "center",
        top: "40px",
        position: "relative",
        marginLeft: "40px",
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Students() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [studentid, setStudentId] = React.useState([]);

    console.log("iiii", studentid);

    const handleOpen = async () => {
        setOpen(true);
        // const { data } = await axios.post( `/info/:_id`, {

        // });
    }
    const handleClose = () => setOpen(false);




    const [student, setStudent] = React.useState([]);
    const WAIT_TIME = 5000;

    useEffect(() => {
        loadStudent();
    }, [student]);

    const loadStudent = async () => {
        const { data } = await axios.get(`/api/all`);
        setStudent(data)

        console.log(data)
    };



    return (
        <div>

            {/* <pre>{JSON.stringify(student, null, 4)}</pre> */}

            {student.map(item => (
                <>
                    <div className={classes.stud} onClick={()=> setStudentId(item._id)}>

                        <Avatar onClick={handleOpen}  style={{ marginLeft: "4px", cursor: "pointer" }} src="/broken-image.jpg" />

                        <h3 onClick={handleOpen}  style={{ paddingLeft: "10px", cursor: "pointer" }} >{item.name}</h3>




                    </div>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Marks id={studentid} close={handleClose}/>
                        </Box>
                    </Modal>
                </>
            ))

            }
        </div >
    )
}
