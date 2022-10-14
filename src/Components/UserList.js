import React from "react";
import Usercss from'./UserList.module.css'
const UserList=(props)=>{
return(
    <div>
    <ul>
    {props.users.map((user) => (
        <li>
          {user.name} ({user.age} years old)
          
        </li>
      ))}
    </ul>
    <button className={Usercss.btn}>subscribe</button>
    </div>
)
}
export default UserList;