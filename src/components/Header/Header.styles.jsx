import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  justify-content: end;
  align-content: center;
  align-items: center;
  background-color: green;
  height: 80px;

  @media screen and (min-width: 600px) {
    height: 100px;
  }
`
export const WrapperLogo = styled.div`
  margin-right: 30%;
  margin-top: 20px;
  transform: rotate(5deg);

  @media screen and (min-width: 600px) {
    margin-right: 44%;
  }
`
export const LogoD = styled.span`
  font-size: 30px;
  color: yellow;
  position: relative;
  top: 4px;
  left: 6px;
`
export const LogoP = styled.span`
  font-size: 30px;
  color: yellow;
  position: relative;
  bottom: 18px;
  right: 6px;
`
export const WrapperIcon = styled.div`
  margin-right: 20px;
`
