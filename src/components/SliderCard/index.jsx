import Slider from "react-slick"
import CardMenu from "../CardMenu"
import { foods } from "../Constant/name.foods"

import "./styles.css"

const CardSlider = ({ products, openModal, setGetFoodId }) => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToscroll: 1,

    // eslint-disable-next-line react/display-name
    appendDots: (dots) => (
      <div className='divDots '>
        <ul className='ulDots'> {dots} </ul>
      </div>
    ),

    // eslint-disable-next-line react/display-name
    customPaging: (i) => <div className='divCustomPaging'>{foods[i]}</div>,
  }
  return (
    <div className='divmain'>
      <Slider {...settings}>
        {products.map((food) => (
          <CardMenu
            products={food}
            openModal={openModal}
            setGetFoodId={setGetFoodId}
          />
        ))}
      </Slider>
    </div>
  )
}
export default CardSlider
