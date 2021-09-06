import { ADD_LIKES, DELETE_LIKE, ADD_PRODUCT } from "./type"

export const addLikes = (foodLike) => ({
  type: ADD_LIKES,
  payload: foodLike,
})

export const deleteLikes = (foodNotLike) => ({
  type: DELETE_LIKE,
  payload: foodNotLike,
})

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
})
