import React from 'react'
import Grid from '@mui/material/Grid';
import Leftbar from "../componenets/teacher/Leftbar"
import Add from "../componenets/teacher/Add"
import Students from "../componenets/teacher/studentUpdate"

export default function Teacher() {
    return (
        <div>
            
            <Add/>

            <Students/>
        </div>
    )
}
