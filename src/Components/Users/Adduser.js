import React from "react";
import { useState } from "react";
const Adduser=(props)=>{
const [name,setName]=useState('');
const [age,setAge]=useState('');
    const textHandler=(event)=>{
 setName(event.target.value);
    }
 
    const ageHandler=(event)=>{
        setAge(event.target.value);

        
    }
    const submitHandler=(event)=>{
    event.preventDefault();
    props.onSubmit(name,age);
    
    }
return(
    <form onSubmit={submitHandler}>
    <label>username</label>
    <input type='text' onChange={textHandler} ></input>
    <label>age/year</label>
    <input type='number' onChange={ageHandler} ></input>
    <button type="sumit" className="btn" >submit</button>
    </form>
)
}
export default Adduser;