import styled from "styled-components"

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ img }) => img}), gray;
  background-size: 100%auto, cover;
  background-position: center;
  height: 150px;
  position: relative;
  animation: animateHeroImage 1s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (min-width: 600px) {
    height: 275px;
  }
  @media screen and (min-width: 1280px) {
    height: 350px;
  }
`
