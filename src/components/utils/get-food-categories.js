const getFoodCategories = (foods) => {
  if (foods) {
    const sandwich = foods?.filter((food) => food.idCategoria === 9)
    const chips = foods?.filter((food) => food.idCategoria === 83)
    const pizzas = foods?.filter((food) => food.idCategoria === 7)
    const combos = foods?.filter((food) => food.idCategoria === 102)

    return [sandwich, chips, pizzas, combos]
  } else {
    return []
  }
}

export default getFoodCategories
