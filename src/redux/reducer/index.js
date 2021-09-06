import { ADD_LIKES, DELETE_LIKE, ADD_PRODUCT } from "../actions/type"

const productsReducer = (state, action) => {
  switch (action.type) {
    case ADD_LIKES:
      return {
        ...state,
        dataProducts: [...state.dataProducts, action.payload],
      }
    case DELETE_LIKE:
      return {
        ...state,
        dataProducts: state.dataProducts.filter(
          (food) => food !== action.payload
        ),
      }
    case ADD_PRODUCT:
      return {
        ...state,
        counterProducts: [...state.counterProducts, action.payload],
      }
    default:
      return state
  }
}

export default productsReducer
