import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setCurrency } from '../redux/reducers/currencies'

const Header = () => {
  const currencies = useSelector((store) => store.currencies.list)
  const count = useSelector((store) =>
    Object.keys(store.cart).reduce((acc, rec) => acc + store.cart[rec], 0)
  )

  const price = useSelector((store) =>
    Object.keys(store.cart).reduce((acc, rec) => {
      const goodPrice = store.goods.list.find((item) => item.id === rec).price
      return acc + goodPrice * store.cart[rec]
    }, 0)
  )
  const ratio = useSelector((store) => store.currencies.ratio)

  const dispatch = useDispatch()

  const activeButtonClasses =
    'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white'
  const inactiveButtonClasses =
    'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3'

  const onCurrencyChange = (target) => {
    dispatch(setCurrency(target))
  }

  return (
    <nav className="flex justify-between mb-4">
      <Link to="/" id="brand-name">
        My Shop
      </Link>
      <ul className="flex">
        {currencies.map((item) => (
          <li key={item.name} className="mr-3">
            <button
              type="button"
              onClick={() => onCurrencyChange(item.name)}
              className={item.isActive ? activeButtonClasses : inactiveButtonClasses}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <Link to="/basket" id="order-count">
        <i className="fa fa-cart-plus" aria-hidden="true" /> {count} Total:{' '}
        {(price * ratio).toFixed(2)}
      </Link>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
