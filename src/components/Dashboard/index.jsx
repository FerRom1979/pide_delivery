import CardSlider from "../SliderCard"
import getFoodCategories from "../utils/get-food-categories"
import Modal from "../Modal"
import { useModal } from "../../Hooks/useModal"
import CardModal from "../CardModal"
import { useState } from "react"

const Dashboard = ({ products }) => {
  const data = Object.values(products.Productos)
  const [isOpenModal, openModal, closeModal] = useModal(false)

  const [getFoodId, setGetFoodId] = useState()
  const modalFood = data.filter((food) => food.idProducto === getFoodId)
  return (
    <>
      <CardSlider
        products={getFoodCategories(data)}
        openModal={openModal}
        setGetFoodId={setGetFoodId}
      />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <CardModal closeModal={closeModal} products={modalFood} />
      </Modal>
    </>
  )
}

export default Dashboard
