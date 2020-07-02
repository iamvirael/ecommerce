import axios from 'axios'

const initialState = {
  list: []
}

const SET_GOODS = 'SET_GOODS'
const ORDER_ALPHABETICALLY = 'ORDER_ALPHABETICALLY'
const ORDER_PRICE = 'ORDER_PRICE'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS: {
      return { ...state, list: action.list }
    }
    case ORDER_PRICE: {
      return { ...state, list: [...state.list].sort((a, b) => a.price - b.price) }
    }
    case ORDER_ALPHABETICALLY: {
      return {
        ...state,
        list: [...state.list].sort((a, b) => {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        })
      }
    }
    default:
      return state
  }
}

export function getGoodsData() {
  return (dispatch) => {
    axios('/api/v1/goods')
      .then(({ data }) => {
        dispatch({ type: SET_GOODS, list: data })
      })
      .catch(() => {
        dispatch({ type: SET_GOODS, list: [] })
      })
  }
}

export function orderAlphabetically() {
  return { type: ORDER_ALPHABETICALLY }
}

export function orderByPrice() {
  return { type: ORDER_PRICE }
}
