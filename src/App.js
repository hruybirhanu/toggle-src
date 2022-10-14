import { useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import Adduser from './Components/Users/Adduser';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './Components/List';
import CounterOne from './CounterOne';
import classes from './Button.module.css';

function App() {
  const[paragraph,setparagraph]=useState(false)
  const [userlist,setUsersList]=useState([]);
  const ToggleparagraphHandlaer=()=>{
    setparagraph((prevparagraph)=>!prevparagraph)
  }
  const datahandle=(data,age)=>{
    console.log(data,age)
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: data, age: age, id: Math.random().toString() },
      ];
    });
  }
  return (
    
    <div className="App">  
    <h1>hi frends</h1> 
    {paragraph &&<p> this is paragraph</p>}
    <button className={classes.btn} onClick={ToggleparagraphHandlaer}>togleshowparagraph</button>
    
   <Adduser onSubmit={datahandle}></Adduser> 
  <UserList users={userlist}></UserList>
  <Header></Header>
  <Footer></Footer>
  <List></List>
  <CounterOne></CounterOne>
  
  </div>
  );
}
export default App;
