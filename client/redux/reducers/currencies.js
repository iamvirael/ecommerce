import axios from 'axios'

const initialState = {
  list: [
    { name: 'USD', isActive: true },
    { name: 'EUR', isActive: false },
    { name: 'CAD', isActive: false }
  ],
  ratio: 1
}

const UPDATE_CURRENCY = 'UPDATE_CURRENCY'

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY: {
      return {
        ...state,
        ratio: action.ratio,
        list: state.list.map((item) =>
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
export function setCurrency(target) {
  return (dispatch) => {
    axios(`/api/v1/currencies/usd/${target}`).then(({ data }) => {
      dispatch({ type: UPDATE_CURRENCY, ratio: data, activeCurrency: target })
    })
  }
}
