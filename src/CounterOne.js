
import React, { useReducer } from 'react'
const inisialstate=0
const reducer=(state,action)=>{
  switch(action){
    case'increment':
    return state+1
    case 'decrement':
      return state-1
      case 'reset':
        return inisialstate
      default:
        return state
  }
}
function CounterOne() {
 const[counter,dispatch]=useReducer(reducer,inisialstate);
  return (
   <div>
   <div>couter:{counter}</div>
   <button onClick={()=>dispatch('increment')}>Increment</button>
   <button onClick={()=>dispatch('decrement')}>Decrement</button>
   <button onClick={()=>dispatch('reset')}>Reset</button>
   </div>
  )
}
export default CounterOne;
