import { useState } from "react"
// redux
import { useSelector, useDispatch } from "react-redux"
import { addLikes, deleteLikes, addProduct } from "../../redux/actions"
// icons
import { IoIosHeart, IoIosAdd, IoIosRemove, IoMdShare } from "react-icons/io"
// loader
import Loader from "../Loader"
// styles
import {
  Content,
  Description,
  Card,
  WrapperButtons,
  Title,
  Price,
  Button,
  WrapperDescription,
  ImgProduct,
  CounterProducts,
  ButtonOrder,
  Order,
} from "./CardMenu.styles"

const CardMenu = ({ products, openModal, setGetFoodId }) => {
  const dataProducts = useSelector((state) => state.dataProducts)
  const counterProducts = useSelector((state) => state.counterProducts)
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  const [foodId, setFoodId] = useState(null)

  const data = Object.values(products)

  const getLike = (id) => {
    if (!dataProducts.includes(id)) {
      dispatch(addLikes(id))
    } else {
      dispatch(deleteLikes(id))
    }
  }

  const getColor = (id) => {
    return dataProducts.includes(id)
  }

  const addOrder = (id) => {
    const order = {
      id,
      counter,
    }
    dispatch(addProduct(order))
    setCounter(0)
  }

  const getOrder = (id) => {
    return counterProducts.filter((product) => product.id === id)
  }

  return (
    <Content>
      {!data ? (
        <Loader />
      ) : (
        data.map((food) => (
          <Card>
            <div
              onClick={() => {
                openModal()
                return setGetFoodId(food.idProducto)
              }}
            >
              <ImgProduct src={food.imagenProducto} alt='img-productos' />
            </div>
            <WrapperDescription>
              <Title>{food.nombreProducto}</Title>
              <Description>{food.descriProducto}</Description>

              <Price>${food.precioProducto}</Price>
              {counter > 0 && foodId === food.idProducto && (
                <CounterProducts>
                  <span>Total Order</span>
                  <span>{counter}</span>
                  <ButtonOrder onClick={() => addOrder(food.idProducto)}>
                    ok
                  </ButtonOrder>
                </CounterProducts>
              )}
              {getOrder(food.idProducto).length > 0 && (
                <CounterProducts>
                  <Order>
                    sus {getOrder(food.idProducto)[0].counter} ordenes lo
                    esperan!!!
                  </Order>
                </CounterProducts>
              )}
            </WrapperDescription>

            <WrapperButtons>
              <div>
                <Button
                  height={60}
                  bottom
                  onClick={() => {
                    setCounter(counter - 1)
                    return setFoodId(food.idProducto)
                  }}
                  disabled={
                    getOrder(food.idProducto).length > 0 ? "true" : false
                  }
                >
                  <IoIosRemove
                    size='20px'
                    color={
                      getOrder(food.idProducto).length > 0 ? "grey" : "black"
                    }
                  />
                </Button>
                <Button onClick={() => getLike(food.idProducto)}>
                  <IoIosHeart
                    size='20px'
                    color={getColor(food.idProducto) ? "red" : "black"}
                  />
                </Button>
              </div>
              <div>
                <Button
                  height={60}
                  bottom
                  onClick={() => {
                    setCounter(counter + 1)
                    return setFoodId(food.idProducto)
                  }}
                  disabled={
                    getOrder(food.idProducto).length > 0 ? "true" : false
                  }
                >
                  <IoIosAdd
                    size='20px'
                    color={
                      getOrder(food.idProducto).length > 0 ? "grey" : "black"
                    }
                  />
                </Button>
                <Button>
                  <IoMdShare size='20px' color='black' />
                </Button>
              </div>
            </WrapperButtons>
          </Card>
        ))
      )}
    </Content>
  )
}

export default CardMenu
