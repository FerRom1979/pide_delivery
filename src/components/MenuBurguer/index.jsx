import React from "react"
import { slide as Menu } from "react-burger-menu"

import "./styles.css"

const MenuBurger = () => {
  return (
    <Menu>
      <a id='home' className='menu-item' href='/home'>
        Home
      </a>
      <a id='about' className='menu-item' href='/about'>
        About
      </a>
      <a id='contact' className='menu-item' href='/contact'>
        Contact
      </a>
    </Menu>
  )
}

export default MenuBurger
