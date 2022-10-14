import React from 'react'
import Headercss from'./Header.module.css'
function Header() {
  return (
    <div>
      <button className={Headercss.btn}> cancel </button>
    </div>
  )
}
export default Header;
