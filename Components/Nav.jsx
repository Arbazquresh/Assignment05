import React,{useState}  from "react";
import { navdata } from "./NavData";
import { Button,Grid } from "@mui/material";
import { Link } from "react-router-dom";


export const Nav=()=>{
    const [data,setData]=useState(navdata)
    return(
        <Grid container spacing={2}>

        {
            data.map((item)=>
            <Grid item xs={3}>
                <Link to={item.path}>
                 <Button variant="contained" fullWidth>{item.label}</Button>
                 </Link>
                 </Grid>
                )
            }

        
        
        </Grid>
    )
}