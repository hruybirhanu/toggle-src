import React from "react";
import { useState } from "react";
const Child=(props)=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [sex,setSex]=useState('');
    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const ageHandler=(event)=>{
      setAge(event.target.value);
    }
    const sexHandler=(event)=>{
     setSex(event.target.value)
    }
    const onclickHandler=(event)=>{
        event.preventDefault();
        props.onClicks(name,age,sex);  
        
    }
    return(
        <child>
        <form onSubmit={onclickHandler}>
        <label>name</label>
        <input type='text' onChange={nameHandler}></input>
        <label>age</label>
        <input type='number' onChange={ageHandler}></input>
        <label>sex</label>
        <input type='text' onChange={sexHandler}></input>
        <button type="submit" >submit</button>
        </form>
        
        </child>
    )
}
export default Child;