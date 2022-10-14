import React from "react";
import { useState } from "react";
const Newuser=(props)=>{
 const   [grade,setGrade]=useState('');
   const [point,setPoint]=useState('');
    const gradeHandler=(event)=>{
        setGrade(event.target.value);
    }
    const pointHandler=(event)=>{
setPoint(event.target.value);
    }
    const submitHandler=(event)=>{
     event.preventDefault();
     props.oncontrol(grade,point);
    }
    return(
        <form onSubmit={submitHandler}>
        <label>grade</label>
        <input type='number' onChange={gradeHandler}></input>
        <label >point</label>
        <input type='number' onChange={pointHandler}></input>
        <button className="btn">add user</button>
        </form>
    );
}
export default Newuser;