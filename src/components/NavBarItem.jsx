import React from 'react'

function NavBarItem(props) {
  return (
    <li className='navbar-item'>
      <a href={props.section}>{props.item}</a>
    </li>
  )
}

export default NavBarItem