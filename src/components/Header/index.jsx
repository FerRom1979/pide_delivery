import React from "react"
import MenuBurger from "../MenuBurguer"
import { IoMdBasket } from "react-icons/io"

import {
  Content,
  WrapperLogo,
  LogoD,
  LogoP,
  WrapperIcon,
} from "./Header.styles"

const Header = () => (
  <Content>
    <MenuBurger />
    <WrapperLogo>
      <LogoD>d</LogoD>
      <LogoP>P</LogoP>
    </WrapperLogo>
    <WrapperIcon>
      <IoMdBasket size='50px' color='#adaaaa' />
    </WrapperIcon>
  </Content>
)

export default Header
