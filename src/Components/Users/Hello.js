import React from "react";
import { useState } from "react";
const Hello=(props)=>{
    const [name,setName]=useState('');  
    const [lname,setLname]=useState('');
    const [sex,setSex]=useState('');
    const [email,setEmail]=useState('');  
    const firstnameHandler=(event)=>{
        console.log(event.target.value);
     setName(event.target.value);
    }
    const lastnameHandler=(event)=>{
        console.log(event.target.value);
       setLname(event.target.value);
    }
const emailHandler=(event)=>{
    console.log(event.target.value);
setEmail(event.target.value);
}
const sexHandler=(event)=>{
    console.log(event.target.value);
setSex(event.target.value)
}
const submitHandler=(event)=>{
    
    event.preventDefault();
    props.onhello(name,lname,sex,email);
    
}
    return(
       <form onSubmit={submitHandler}>
       <label>firstname</label>
       <input type='text' onChange={firstnameHandler}></input>
       <label>lastname</label>
       <input type='text' onChange={lastnameHandler}></input>
       <label>sex</label>
       <input type='text' onChange={sexHandler}></input>
       <label>email</label>
       <input type='text' onChange={emailHandler}></input>
       <button type='submit'>add data</button>
       </form>
    )
}
export default Hello;