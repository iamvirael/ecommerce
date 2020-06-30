import axios from 'axios'

const initialState = {
  list: [],
  currencies: [
    { name: 'USD', isActive: true },
    { name: 'EUR', isActive: false },
    { name: 'CAD', isActive: false }
  ],
  ratio: 1
}

const SET_GOODS = 'SET_GOODS'
const UPDATE_CURRENCY = 'UPDATE_CURRENCY'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS: {
      return { ...state, list: action.list }
    }
    case UPDATE_CURRENCY: {
      return {
        ...state,
        ratio: action.ratio,
        currencies: state.currencies.map((item) =>
          item.name === action.activeCurrency
            ? { ...item, isActive: true }
            : { ...item, isActive: false }
        )
      }
    }
    default:
      return state
  }
}

export function getGoodsData() {
  return (dispatch) => {
    axios('/api/v1/goods').then(({ data }) => {
      dispatch({ type: SET_GOODS, list: data })
    })
  }
}

export function setCurrency(target) {
  return (dispatch) => {
    axios(`/api/v1/currencies/usd/${target}`).then(({ data }) => {
      dispatch({ type: UPDATE_CURRENCY, ratio: data, activeCurrency: target })
    })
  }
}
