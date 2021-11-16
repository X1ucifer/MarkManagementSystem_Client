import { useState, useEffect, useContext } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Context } from "../context";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Teacher() {

    const [subject, setSubject] = useState([]);

    const [sm, setSM] = useState([]);


    const {
        state: { user },
        dispatch,
    } = useContext(Context);


    useEffect(() => {
        if (localStorage) {
            let userDetails = JSON.parse(localStorage.getItem('user'));
            console.log("usu", userDetails._id)
            setSubject(userDetails._id)
         

        }
    }, []);

  console.log("udddsu", subject)

    useEffect(() => {
        loadSubject();
    }, []);



    const loadSubject = async (e) => {

        const { data } = await axios.post(`/api/getmark/${subject}`);
        setSM(data)

        console.log("mmm", data)



    };




    return (
        <div style={{width:"60%",margin:"auto auto",marginTop:"60px"}}>

          
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> Subject</StyledTableCell>
                            <StyledTableCell align="right">Marks</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {sm.subject_one}
                            </StyledTableCell>
                            <StyledTableCell align="right">{sm.subject_one_mark}</StyledTableCell>
                            


                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {sm.subject_two}
                            </StyledTableCell>
                            <StyledTableCell align="right">{sm.subject_two_mark}</StyledTableCell>
                            


                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {sm.subject_three}
                            </StyledTableCell>
                            <StyledTableCell align="right">{sm.subject_three_mark}</StyledTableCell>
                            


                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {sm.subject_four}
                            </StyledTableCell>
                            <StyledTableCell align="right">{sm.subject_four_mark}</StyledTableCell>
                            


                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {sm.subject_five}
                            </StyledTableCell>
                            <StyledTableCell align="right">{sm.subject_five_mark}</StyledTableCell>
                            


                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                {sm.subject_six}
                            </StyledTableCell>
                            <StyledTableCell align="right">{sm.subject_six_mark}</StyledTableCell>
                            


                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
