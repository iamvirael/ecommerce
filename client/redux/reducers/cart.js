const initialState = {}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1
      }
    }
    case REMOVE_FROM_CART: {
      const countUpdated = state[action.id] - 1
      let dictionaryUpdated = { ...state }
      if (countUpdated === 0) {
        delete dictionaryUpdated[action.id]
      } else {
        dictionaryUpdated = { ...dictionaryUpdated, [action.id]: countUpdated }
      }

      return { ...dictionaryUpdated }
    }
    default:
      return state
  }
}

export function addGoodToCart(id) {
  return { type: ADD_TO_CART, id }
}

export function removeGoodFromCart(id) {
  return { type: REMOVE_FROM_CART, id }
}
