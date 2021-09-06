// loader
import Loader from "../Loader"
// styles
import {
  Content,
  Description,
  Card,
  Title,
  Price,
  WrapperDescription,
  ImgProduct,
} from "./CardModal.styles"

const CardMenu = ({ products }) => {
  const data = Object.values(products)

  return (
    <Content>
      {!data ? (
        <Loader />
      ) : (
        data.map((food) => (
          <Card>
            <div>
              <ImgProduct src={food.imagenProducto} alt='img-productos' />
            </div>
            <WrapperDescription>
              <Title>{food.nombreProducto}</Title>
              <Description>{food.descriProducto}</Description>

              <Price>${food.precioProducto}</Price>
            </WrapperDescription>
          </Card>
        ))
      )}
    </Content>
  )
}

export default CardMenu
