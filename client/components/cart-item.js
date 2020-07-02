import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoodToCart, removeGoodFromCart } from '../redux/reducers/cart'

const CartItem = (props) => {
  const { id, title, price, count } = props.item
  const { ratio } = props

  const activeCurrency = useSelector(
    (store) => store.currencies.list.find((it) => it.isActive).name
  )

  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(addGoodToCart(id))
  }
  const removeItemFromCart = () => {
    dispatch(removeGoodFromCart(id))
  }

  return (
    <tr className="hover:bg-grey-lighter w-full">
      <td className="w-2/3 border-b border-grey-light">{title}</td>
      <td className="w-1/12 py-1 px-1 border-b border-grey-light">{count}</td>
      <td className="w-1/12 border-b border-grey-light">
        <button
          type="button"
          className="inline-block px-1 py-1 font-semibold mr-2 text-black text-xl"
          onClick={addItemToCart}
        >
          <i className="fas fa-plus-circle" />
        </button>
      </td>
      <td className="w-1/6 py-1 px-1 border-b border-grey-light">
        {(price * ratio * count).toFixed(2)} {activeCurrency}
      </td>
      <td className="w-1/12 border-b border-grey-light">
        <button
          type="button"
          className="inline-block px-1 py-1 font-semibold text-black text-xl"
          onClick={removeItemFromCart}
          disabled={count <= 0}
        >
          <i className="fas fa-minus-circle" />
        </button>
      </td>
    </tr>
  )
}

CartItem.propTypes = {}

export default React.memo(CartItem)
