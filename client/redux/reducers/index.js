import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import goods from './goods'
import cart from './cart'
import currencies from './currencies'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    goods,
    currencies,
    cart
  })

export default createRootReducer
