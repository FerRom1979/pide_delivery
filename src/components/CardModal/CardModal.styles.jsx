import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  margin: 20px 0;

  @media screen and (max-width: 414px) {
    width: 400px;
  }
`
export const ImgProduct = styled.img`
  width: 300px;
  height: 250px;
`

export const WrapperDescription = styled.div`
  width: 400px;
  text-align: center;
`
export const Title = styled.p`
  color: red;
  font-size: 20px;
  text-align: center;
`

export const Description = styled.p`
  font-size: 18px;
`
export const Price = styled.p`
  padding: 10px 0px 5px 15px;
  background-color: violet;
  width: 100%;
  color: white;
  border-radius: 10px;
  font-size: 22px;
  text-align: center;
`
