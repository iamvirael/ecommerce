import axios from 'axios'

const initialState = {
  list: []
}

const SET_GOODS = 'SET_GOODS'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS: {
      return { ...state, list: action.list }
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
