import styled from "styled-components"

export const Navbar = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`
export const ItemNavbar = styled.li`
  color: #7c7a7a;
  cursor: pointer;

  :hover {
    opacity: 0.5;
    border-bottom: 3px solid green;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;

    :hover {
      border-bottom: 5px solid green;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`
