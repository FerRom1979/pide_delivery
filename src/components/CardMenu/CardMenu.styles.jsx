import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Card = styled.div`
  display: flex;
  width: 800px;
  height: 200px;

  border: 1px solid gray;
  border-radius: 0 10px 10px 0;

  margin: 20px 0;

  @media screen and (max-width: 814px) {
    width: 650px;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    height: 170px;
  }

  @media screen and (max-width: 414px) {
    width: 370px;
    height: 170px;
  }
`

export const ImgProduct = styled.img`
  width: 300px;
  height: 200px;

  cursor: pointer;

  @media screen and (max-width: 814px) {
    width: 250px;
  }

  @media screen and (max-width: 600px) {
    width: 140px;
    height: 170px;
  }
`

export const WrapperDescription = styled.div`
  width: 400px;

  @media screen and (max-width: 814px) {
    width: 350px;
  }
`
export const Title = styled.p`
  color: red;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin: 10px 0;
  }
`

export const Description = styled.p`
  font-size: 18px;
  height: 75px;

  @media screen and (max-width: 814px) {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin: 0;
    height: 97px;
  }
`
export const Price = styled.p`
  padding: 10px 0px 5px 15px;
  background-color: violet;
  width: 100px;
  color: white;
  border-radius: 0 10px 10px 0;
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    width: 80px;
    margin: 0;
  }
`

export const CounterProducts = styled.span`
  display: flex;
  flex-direction: column;
  color: yellow;
  position: relative;
  bottom: 60px;
  left: 50px;
  font-size: 14px;

  @media screen and (min-width: 600px) {
    bottom: 90px;
    font-size: 18px;
  }
`
export const Order = styled.span`
  display: flex;
  flex-direction: column;
  color: #368d36;
  position: relative;
  bottom: 10px;
  right: 18px;
  font-size: 14px;
  transform: rotate(-20deg);

  @media screen and (min-width: 600px) {
    top: 10px;
    transform: rotate(0);
    font-size: 18px;
  }
`
export const ButtonOrder = styled.button`
  width: 40px;
  border: none;
  cursor: pointer;
  background-color: green;
  font-size: 18px;
  color: white;
  margin: auto;
  border-radius: 10px;
`

export const WrapperButtons = styled.div`
  display: flex;
`

export const Button = styled.button`
  width: 100%;
  min-height: ${({ height }) => (height ? `120px` : "79px")};
  background-color: transparent;
  border: none;
  border-bottom: ${({ bottom }) => bottom && "1px solid grey"};
  border-left: 1px solid grey;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    min-height: ${({ height }) => (height ? `104px` : "63px")};
  }
`
