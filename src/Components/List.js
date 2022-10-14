import React, { useEffect, useState } from 'react'
function List() {
    const[resourceType,setResourceType]=useState('');
    useEffect(()=>{
console.log('useEffect')
    })
  return (<>
    <div>
      <button onClick={()=>setResourceType('USER')}>USER</button>
      <button onClick={()=>setResourceType('post')}>post</button>
      <button onClick={()=>setResourceType('moon')}>moon</button>
    </div>
    <h1>{resourceType}</h1>
  
    </>
  )
}
export default List
