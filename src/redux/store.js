import { createStore } from "redux"
import reducer from "./reducer/index"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {
  dataProducts: [],
  counterProducts: [],
}
const compositeEnhancer = composeWithDevTools()

export const store = createStore(reducer, initialState, compositeEnhancer)
